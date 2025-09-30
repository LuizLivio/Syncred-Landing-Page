import { ref } from 'vue'

// Video store for managing hero video state
const heroVideoSource = ref('/assets/card-showcase.mp4')
const videoChangeListeners = new Set()

export function useVideoStore() {
  const setHeroVideo = (videoFile) => {
    console.log('setHeroVideo called with:', videoFile)
    if (videoFile) {
      // Clean up previous object URL if it exists
      if (heroVideoSource.value.startsWith('blob:')) {
        URL.revokeObjectURL(heroVideoSource.value)
      }

      // Create new object URL
      heroVideoSource.value = URL.createObjectURL(videoFile)
      console.log('New video source:', heroVideoSource.value)
      console.log('Number of listeners:', videoChangeListeners.size)

      // Notify listeners
      videoChangeListeners.forEach(callback => {
        console.log('Calling listener with:', heroVideoSource.value)
        callback(heroVideoSource.value)
      })
    }
  }

  const onVideoChange = (callback) => {
    console.log('onVideoChange: Adding listener')
    videoChangeListeners.add(callback)
    console.log('Total listeners now:', videoChangeListeners.size)

    // Return cleanup function
    return () => {
      console.log('onVideoChange: Removing listener')
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