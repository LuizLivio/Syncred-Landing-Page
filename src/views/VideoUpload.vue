<template>
  <div class="video-upload">
    <div class="container">
      <div class="upload-wrapper">
        <h1 class="upload-title">Upload de vídeo</h1>

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
              <br>
              <small>O vídeo será salvo como: card-showcase.mp4</small>
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
              <button @click="removeFile" class="remove-btn">×</button>
            </div>

            <div v-if="uploadSuccess" class="success-message">
              ✅ Vídeo substituído com sucesso!
            </div>

            <div class="upload-actions">
              <button @click="startUpload" :disabled="uploading" class="upload-btn">
                {{ uploading ? 'Substituindo...' : 'Substituir Vídeo' }}
              </button>
              <button @click="removeFile" class="cancel-btn">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoUpload',
  data() {
    return {
      selectedFile: null,
      isDragOver: false,
      uploading: false,
      uploadSuccess: false
    }
  },
  methods: {
    handleDrop(e) {
      e.preventDefault()
      this.isDragOver = false
      const files = e.dataTransfer.files
      if (files.length > 0) {
        this.selectFile(files[0])
      }
    },
    handleFileSelect(e) {
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
      this.selectedFile = null
      this.uploading = false
      this.uploadSuccess = false
      this.$refs.fileInput.value = ''
    },
    async startUpload() {
      if (!this.selectedFile) return

      this.uploading = true
      this.uploadSuccess = false

      try {
        const formData = new FormData()
        formData.append('video', this.selectedFile)

        const response = await fetch('/api/upload-video', {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          this.uploadSuccess = true
          setTimeout(() => {
            this.removeFile()
          }, 2000)
        } else {
          alert('Erro ao substituir o vídeo')
        }
      } catch (error) {
        console.error('Upload error:', error)
        alert('Erro ao substituir o vídeo: ' + error.message)
      } finally {
        this.uploading = false
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
  min-height: 100vh;
  padding: 120px 0 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.upload-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.upload-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.upload-area {
  background: white;
  border: 3px dashed #e2e8f0;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
}

.upload-area.drag-over {
  border-color: #2563eb;
  background: rgba(37, 99, 235, 0.05);
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.upload-placeholder h3 {
  font-size: 1.5rem;
  color: #374151;
  margin: 0;
}

.upload-placeholder p {
  color: #64748b;
  margin: 0;
}

.file-input {
  display: none;
}

.browse-btn {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
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
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.supported-formats {
  margin-top: 1rem;
  color: #64748b;
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
  background: #f8fafc;
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
  color: #374151;
}

.file-details p {
  margin: 0 0 0.5rem 0;
  color: #64748b;
}

.file-type {
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
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

.success-message {
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
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
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
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

.cancel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
}

@media (max-width: 768px) {
  .upload-area {
    padding: 2rem 1rem;
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
