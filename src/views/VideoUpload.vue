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

            <div class="upload-progress" v-if="uploadProgress > 0">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
              </div>
              <span class="progress-text">{{ uploadProgress.toFixed(2) }}% concluído</span>
            </div>

            <div class="upload-actions">
              <button @click="startUpload" :disabled="uploading" class="upload-btn">
                {{ uploading ? 'Carregando...' : 'Carregar Vídeo' }}
              </button>
              <button @click="removeFile" class="cancel-btn">Cancelar</button>
            </div>
          </div>
        </div>

        <div v-if="uploadedVideos.length > 0" class="uploaded-videos">
          <h3>Vídeos carregados</h3>
          <div class="video-list">
            <div v-for="video in uploadedVideos" :key="video.id" class="video-item">
              <div class="video-thumbnail">🎥</div>
              <div class="video-info">
                <h4>{{ video.name }}</h4>
                <p>{{ video.uploadDate }}</p>
                <span class="video-status">{{ video.status }}</span>
              </div>
              <div class="video-actions">
                <button @click="useAsHeroVideo(video)" class="hero-btn">Utilizar</button>
                <button @click="downloadVideo(video)" class="download-btn">Baixar</button>
                <button @click="deleteVideo(video.id)" class="delete-btn">Apagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVideoStore } from '../stores/videoStore'

export default {
  name: 'VideoUpload',
  data() {
    return {
      selectedFile: null,
      isDragOver: false,
      uploading: false,
      uploadProgress: 0,
      uploadedVideos: []
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
        if (file.size <= 500 * 1024 * 1024) { // 500MB limit
          this.selectedFile = file
        } else {
          alert('File size must be less than 500MB')
        }
      } else {
        alert('Please select a valid video file')
      }
    },
    removeFile() {
      this.selectedFile = null
      this.uploadProgress = 0
      this.uploading = false
      this.$refs.fileInput.value = ''
    },
    startUpload() {
      if (!this.selectedFile) return

      this.uploading = true
      this.uploadProgress = 0

      // Simulate upload progress
      const interval = setInterval(() => {
        this.uploadProgress += Math.random() * 10
        if (this.uploadProgress >= 100) {
          this.uploadProgress = 100
          clearInterval(interval)

          setTimeout(() => {
            this.completeUpload()
          }, 500)
        }
      }, 200)
    },
    completeUpload() {
      const video = {
        id: Date.now(),
        name: this.selectedFile.name,
        uploadDate: new Date().toLocaleDateString(),
        status: 'Processing',
        file: this.selectedFile
      }

      this.uploadedVideos.unshift(video)

      // Set the uploaded video as the hero video
      const { setHeroVideo } = useVideoStore()
      setHeroVideo(this.selectedFile)

      this.removeFile()

      // Simulate processing completion
      setTimeout(() => {
        video.status = 'Ready'
      }, 3000)
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    downloadVideo(video) {
      // Create download link for the file
      const url = URL.createObjectURL(video.file)
      const a = document.createElement('a')
      a.href = url
      a.download = video.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    },
    deleteVideo(videoId) {
      if (confirm('Are you sure you want to delete this video?')) {
        this.uploadedVideos = this.uploadedVideos.filter(v => v.id !== videoId)
      }
    },
    useAsHeroVideo(video) {
      // Set the video as the hero video
      const { setHeroVideo } = useVideoStore()
      setHeroVideo(video.file)

      // Show confirmation
      alert(`"${video.name}" is now being used as the hero video!`);
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
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.upload-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.upload-area {
  background: white;
  border: 3px dashed #e2e8f0;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 3rem;
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

.upload-progress {
  margin: 1rem 0;
}

.progress-bar {
  background: #e2e8f0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  height: 100%;
  transition: width 0.3s ease;
}

.progress-text {
  color: #64748b;
  font-size: 0.875rem;
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

.uploaded-videos {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.uploaded-videos h3 {
  margin-bottom: 1.5rem;
  color: #374151;
}

.video-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.video-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 15px;
}

.video-thumbnail {
  font-size: 2rem;
}

.video-info {
  flex: 1;
}

.video-info h4 {
  margin: 0 0 0.5rem 0;
  color: #374151;
}

.video-info p {
  margin: 0 0 0.5rem 0;
  color: #64748b;
  font-size: 0.875rem;
}

.video-status {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
  font-size: 0.875rem;
}

.video-actions {
  display: flex;
  gap: 0.5rem;
}

.hero-btn,
.download-btn,
.delete-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hero-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.hero-btn:hover {
  background: linear-gradient(135deg, #059669, #047857);
}

.download-btn {
  background: #2563eb;
  color: white;
}

.download-btn:hover {
  background: #1d4ed8;
}

.delete-btn {
  background: #ef4444;
  color: white;
}

.delete-btn:hover {
  background: #dc2626;
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

  .video-item {
    flex-direction: column;
    text-align: center;
  }

  .video-actions {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>