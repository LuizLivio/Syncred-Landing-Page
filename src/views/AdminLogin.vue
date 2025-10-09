<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Admin Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuário</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            autocomplete="username"
          />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            autocomplete="current-password"
          />
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { API_ENDPOINTS } from '../config/api'

export default {
  name: 'AdminLogin',
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const handleLogin = async () => {
      loading.value = true
      error.value = ''

      try {
        console.log('Logging in at:', API_ENDPOINTS.LOGIN)
        const response = await fetch(API_ENDPOINTS.LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        })

        console.log('Login response status:', response.status)
        const data = await response.json()
        console.log('Login data:', data)

        if (response.ok) {
          console.log('Login successful, redirecting to /admin')
          router.push('/admin')
        } else {
          error.value = data.error || 'Credenciais inválidas'
        }
      } catch (err) {
        error.value = 'Erro ao fazer login. Tente novamente.'
        console.error('Login error:', err)
      } finally {
        loading.value = false
      }
    }

    return {
      username,
      password,
      error,
      loading,
      handleLogin,
    }
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #141519;
  position: relative;
  overflow: hidden;
}

.login-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(71, 130, 164, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(96, 192, 194, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.login-box {
  background: rgba(10, 17, 70, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(71, 130, 164, 0.2);
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 420px;
  position: relative;
  z-index: 1;
}

h1 {
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #d2ebfa 0%, #60c0c2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--light-blue);
  font-weight: 600;
  font-size: 0.95rem;
}

input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(0, 5, 40, 0.5);
  border: 1px solid rgba(71, 130, 164, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  color: white;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input::placeholder {
  color: rgba(210, 235, 250, 0.4);
}

input:focus {
  outline: none;
  border-color: #60c0c2;
  background: rgba(0, 5, 40, 0.7);
  box-shadow: 0 0 0 3px rgba(96, 192, 194, 0.1);
}

button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #4782a4, #60c0c2);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(71, 130, 164, 0.4);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  padding: 0.75rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .login-box {
    margin: 1rem;
    padding: 2rem 1.5rem;
  }

  h1 {
    font-size: 1.75rem;
  }
}
</style>
