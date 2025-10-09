import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    })
  ],
  base: '/Syncred-Landing-Page/',
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    sourcemap: true
  },
  css: {
    devSourcemap: true
  }
})
