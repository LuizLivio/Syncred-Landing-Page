// Configuração da API
// Em development usa proxy do Vite (URLs relativas)
// Em production usa VITE_API_URL (URL completa do backend)
const isDevelopment = import.meta.env.VITE_ENV === 'development'
const API_BASE_URL = isDevelopment ? '' : (import.meta.env.VITE_API_URL || '')

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  LOGOUT: `${API_BASE_URL}/api/logout`,
  CHECK_AUTH: `${API_BASE_URL}/api/check-auth`,
  UPLOAD_VIDEO: `${API_BASE_URL}/api/upload-video`,
  VIDEO: `${API_BASE_URL}/api/video`
}

export default API_BASE_URL
