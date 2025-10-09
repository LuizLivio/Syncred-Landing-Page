import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import FGTS from '../views/FGTS.vue'
import AboutUs from '../views/AboutUs.vue'
import SynPartners from '../views/SynPartners.vue'
import VideoUpload from '../views/VideoUpload.vue'
import AdminLogin from '../views/AdminLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/fgts',
    name: 'FGTS',
    component: FGTS
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/synpartners',
    name: 'SynPartners',
    component: SynPartners
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin',
    name: 'VideoUpload',
    component: VideoUpload
  }
]

const router = createRouter({
  history: createWebHistory('/Syncred-Landing-Page/'),
  routes
})

export default router