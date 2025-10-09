<template>
  <div class="video-upload">
    <div class="container">
      <div class="upload-wrapper">
        <div class="header">
          <h1 class="upload-title">Upload de vídeo</h1>
          <button @click="handleLogout" class="logout-btn">Sair</button>
        </div>

        <div class="upload-area" :class="{ 'drag-over': isDragOver }"
             @drop="handleDrop"
             @dragover.prevent="isDragOver = true"
             @dragleave="isDragOver = false"
             @dragenter.prevent>
          <div v-if="!selectedFile" class="upload-placeholder">
            <div class="upload-icon">📹</div>
            <h3>Arraste o vídeo aqui</h3>
            <p>ou clique para procurar</p>
            <input type="file" ref="fileInput" @change="handleFileSelect" accept="video/*" class="file-input">
            <button @click="$refs.fileInput.click()" class="browse-btn">Procurar arquivo</button>
            <div class="supported-formats">
              <small>Formatos suportados: MP4, MOV, AVI, WMV (Max: 500MB)</small>
            </div>
          </div>

          <div v-else class="file-selected">
            <div class="file-info">
              <div class="file-icon">🎬</div>
              <div class="file-details">
                <h4>{{ selectedFile.name }}</h4>
                <p>{{ formatFileSize(selectedFile.size) }}</p>
                <div class="file-type">{{ selectedFile.type }}</div>
              </div>
              <button v-if="!uploadSuccess" @click="removeFile" :disabled="uploading" class="remove-btn">×</button>
            </div>

            <div v-if="uploading" class="progress-container">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
              </div>
              <div class="progress-text">{{ uploadProgress }}% - Enviando vídeo...</div>
            </div>

            <div v-if="uploadSuccess" class="success-message">
              ✅ Vídeo substituído com sucesso!
            </div>

            <div v-if="!uploadSuccess" class="upload-actions">
              <button @click="startUpload" :disabled="uploading" class="upload-btn">
                {{ uploading ? 'Substituindo...' : 'Substituir Vídeo' }}
              </button>
              <button @click="abortUpload" :disabled="!uploading" class="cancel-btn">
                {{ uploading ? 'Abortar Upload' : 'Cancelar' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_ENDPOINTS } from '../config/api'

export default {
  name: 'VideoUpload',
  data() {
    return {
      selectedFile: null,
      isDragOver: false,
      uploading: false,
      uploadSuccess: false,
      uploadProgress: 0
    }
  },
  async mounted() {
    await this.checkAuth()
  },
  methods: {
    async checkAuth() {
      try {
        console.log('Checking auth at:', API_ENDPOINTS.CHECK_AUTH)
        const response = await fetch(API_ENDPOINTS.CHECK_AUTH, {
          credentials: 'include'
        })
        console.log('Check auth response status:', response.status)
        const data = await response.json()
        console.log('Check auth data:', data)
        if (!data.authenticated) {
          console.log('Not authenticated, redirecting to login')
          this.$router.push('/admin/login')
        } else {
          console.log('Authenticated successfully')
        }
      } catch (error) {
        console.error('Auth check error:', error)
        this.$router.push('/admin/login')
      }
    },
    async handleLogout() {
      try {
        await fetch(API_ENDPOINTS.LOGOUT, {
          method: 'POST',
          credentials: 'include'
        })
        this.$router.push('/admin/login')
      } catch (error) {
        console.error('Logout error:', error)
      }
    },
    handleDrop(e) {
      if (this.uploading) return
      e.preventDefault()
      this.isDragOver = false
      const files = e.dataTransfer.files
      if (files.length > 0) {
        this.selectFile(files[0])
      }
    },
    handleFileSelect(e) {
      if (this.uploading) return
      const file = e.target.files[0]
      if (file) {
        this.selectFile(file)
      }
    },
    selectFile(file) {
      if (file.type.startsWith('video/')) {
        if (file.size <= 500 * 1024 * 1024) {
          this.selectedFile = file
          this.uploadSuccess = false
        } else {
          alert('O arquivo deve ter menos de 500MB')
        }
      } else {
        alert('Por favor, selecione um arquivo de vídeo válido')
      }
    },
    removeFile() {
      if (this.uploading) return
      this.selectedFile = null
      this.uploading = false
      this.uploadSuccess = false
      this.uploadProgress = 0
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = ''
      }
    },
    abortUpload() {
      if (this.uploadController) {
        this.uploadController.abort()
        this.uploadController = null
      }
      this.uploading = false
      this.uploadProgress = 0
    },
    async startUpload() {
      if (!this.selectedFile || this.uploading) return

      this.uploading = true
      this.uploadSuccess = false
      this.uploadProgress = 0
      this.uploadController = new AbortController()

      try {
        const formData = new FormData()
        formData.append('video', this.selectedFile)

        const xhr = new XMLHttpRequest()

        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            this.uploadProgress = Math.round((e.loaded / e.total) * 100)
          }
        })

        const uploadPromise = new Promise((resolve, reject) => {
          xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.response)
            } else {
              reject(new Error('Erro ao substituir o vídeo'))
            }
          })

          xhr.addEventListener('error', () => reject(new Error('Erro de rede')))
          xhr.addEventListener('abort', () => reject(new Error('Upload abortado')))

          xhr.open('POST', API_ENDPOINTS.UPLOAD_VIDEO)
          xhr.withCredentials = true
          xhr.send(formData)
        })

        this.uploadController.signal.addEventListener('abort', () => {
          xhr.abort()
        })

        await uploadPromise

        this.uploadProgress = 100
        this.uploadSuccess = true
        setTimeout(() => {
          this.selectedFile = null
          this.uploadSuccess = false
          this.uploadProgress = 0
          if (this.$refs.fileInput) {
            this.$refs.fileInput.value = ''
          }
        }, 2000)
      } catch (error) {
        console.error('Upload error:', error)
        if (error.message !== 'Upload abortado') {
          alert('Erro ao substituir o vídeo: ' + error.message)
        }
        this.uploadProgress = 0
      } finally {
        this.uploading = false
        this.uploadController = null
      }
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }
  }
}
</script>

<style scoped>
.video-upload {
  height: 100%;
  background: #141519;
}

.upload-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.upload-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.upload-area {
  background: rgba(10, 17, 70, 0.3);
  border: 3px dashed rgba(71, 130, 164, 0.4);
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.upload-area.drag-over {
  border-color: #4782a4;
  background: rgba(71, 130, 164, 0.2);
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload-icon {
  font-size: 4rem;
}

.upload-placeholder h3 {
  font-size: 1.5rem;
  color: var(--light-blue);
  margin: 0;
}

.upload-placeholder p {
  color: #a0c4d4;
  margin: 0;
}

.file-input {
  display: none;
}

.browse-btn {
  background: linear-gradient(135deg, #4782a4, #60c0c2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.browse-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(71, 130, 164, 0.4);
}

.supported-formats {
  margin-top: 1rem;
  color: #a0c4d4;
}

.file-selected {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 5, 40, 0.5);
  border: 1px solid rgba(71, 130, 164, 0.2);
  border-radius: 15px;
}

.file-icon {
  font-size: 2rem;
}

.file-details {
  flex: 1;
  text-align: left;
}

.file-details h4 {
  margin: 0 0 0.5rem 0;
  color: var(--light-blue);
}

.file-details p {
  margin: 0 0 0.5rem 0;
  color: #a0c4d4;
}

.file-type {
  background: rgba(71, 130, 164, 0.2);
  color: #60c0c2;
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
  font-size: 0.875rem;
  display: inline-block;
}

.remove-btn {
  background: #ef4444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  padding: 1rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 10px;
  font-weight: 600;
}

.upload-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.upload-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.upload-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.cancel-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.cancel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.progress-container {
  padding: 1.5rem;
  background: rgba(0, 5, 40, 0.5);
  border: 1px solid rgba(71, 130, 164, 0.2);
  border-radius: 15px;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background: rgba(71, 130, 164, 0.2);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.progress-text {
  text-align: center;
  color: var(--light-blue);
  font-weight: 600;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .upload-area {
    padding: 1rem;
  }

  .upload-title {
    font-size: 2rem;
  }

  .file-info {
    flex-direction: column;
    text-align: center;
  }

  .upload-actions {
    flex-direction: column;
  }
}
</style>
