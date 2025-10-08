import { ref } from 'vue'

const heroVideoSource = ref('/assets/card-showcase.mp4')
const videoChangeListeners = new Set()

export function useVideoStore() {
  const setHeroVideo = (videoFile) => {
    if (videoFile) {
      if (heroVideoSource.value.startsWith('blob:')) {
        URL.revokeObjectURL(heroVideoSource.value)
      }

      heroVideoSource.value = URL.createObjectURL(videoFile)

      videoChangeListeners.forEach(callback => {
        callback(heroVideoSource.value)
      })
    }
  }

  const onVideoChange = (callback) => {
    videoChangeListeners.add(callback)

    return () => {
      videoChangeListeners.delete(callback)
    }
  }

  const getHeroVideoSource = () => heroVideoSource.value

  return {
    heroVideoSource,
    setHeroVideo,
    onVideoChange,
    getHeroVideoSource
  }
}