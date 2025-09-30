import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VideoUpload from '../views/VideoUpload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sync-admin-upload-2024',
    name: 'VideoUpload',
    component: VideoUpload
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router