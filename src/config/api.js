// Configuração da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  LOGOUT: `${API_BASE_URL}/api/logout`,
  CHECK_AUTH: `${API_BASE_URL}/api/check-auth`,
  UPLOAD_VIDEO: `${API_BASE_URL}/api/upload-video`,
  VIDEO: `${API_BASE_URL}/api/video`
}

export default API_BASE_URL
