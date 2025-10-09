// Configuração da API
// Em desenvolvimento usa proxy do Vite, em produção usa a URL configurada
const API_BASE_URL = import.meta.env.VITE_API_URL || ''

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  LOGOUT: `${API_BASE_URL}/api/logout`,
  CHECK_AUTH: `${API_BASE_URL}/api/check-auth`,
  UPLOAD_VIDEO: `${API_BASE_URL}/api/upload-video`,
  VIDEO: `${API_BASE_URL}/api/video`
}

export default API_BASE_URL
