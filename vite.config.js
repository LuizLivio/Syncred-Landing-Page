import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    })
  ],
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  },
  build: {
    sourcemap: true
  },
  css: {
    devSourcemap: true
  }
})