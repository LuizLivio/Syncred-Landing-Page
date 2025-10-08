<template>
  <header class="top-bar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <div class="logo-container">
            <img src="/img/logo-syncred-1.png" class="logo-1" />
            <img src="/img/logo-syncred-2.png" class="logo-2" />
          </div>
        </router-link>

        <nav class="nav-menu">
          <router-link to="/fgts" class="nav-link">FGTS</router-link>
          <router-link to="/synpartners" class="nav-link">SynPartners</router-link>
          <router-link to="/about" class="nav-link">Sobre nós</router-link>
          <button @click="sendToWpp()" class="cta-button">Seja parceiro</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    sendToWpp() {
      const message = `Olá! Gostaria de me tornar parceiro da SynCred. Quais são as vantagens?`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5513992006884?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    }
  }
}
</script>

<style scoped>
.container {
  padding: 1rem 2rem;
}
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(2px);
  height: 60px;
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2563eb;
  font-weight: 700;
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-container {
  position: relative;
  width: 200px;
  height: 40px;
  overflow: hidden;
}

.logo-1,
.logo-2 {
  position: absolute;
  top: 0;
  height: 40px;
  width: auto;
}

.logo-1 {
  left: 0;
  animation: logo1Animation 8s infinite;
}

.logo-2 {
  left: 35px;
  animation: logo2Animation 8s infinite ease-in-out;
}

@keyframes logo1Animation {
  0% {
    left: 160px;
    opacity: 1;
  }
  25% {
    left: 0;
    opacity: 1;
  }
  75% {
    left: 0;
    opacity: 1;
  }
  100% {
    left: 160px;
    opacity: 1;
  }
}

@keyframes logo2Animation {
  0% {
    left: 180px;
    opacity: 0;
    transform: scale(1);
  }
  22% {
    left: 50px;
    opacity: 1;
    transform: scale(1.1);
  }
  50% {
    left: 50px;
    opacity: 1;
    transform: scale(1.2);
  }
  75% {
    left: 50px;
    opacity: 1;
    transform: scale(1.1);
  }
  88% {
    left: 180px;
    opacity: 0;
    transform: scale(1);
  }
  100% {
    left: 180px;
    opacity: 0;
  }
}

.logo-icon {
  width: 32px;
  height: 32px;
  margin-right: 0.5rem;
}

.logo-text {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 3rem;
  white-space: nowrap;
}

.nav-link {
  font-size: large;
  text-decoration: none;
  color: var(--light-blue);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #60c0c2;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(135deg, #4782a4, #60c0c2);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #60c0c2;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  width: 100%;
  background: linear-gradient(135deg, #4782a4, #60c0c2);
  box-shadow: 0 0 8px rgba(96, 192, 194, 0.5);
}

.cta-button {
  background: linear-gradient(135deg, #4782a4, #60c0c2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: larger;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-shadow: 3px 1px 4px #374151;
  animation: ease-in-out 0.5s;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(71, 130, 164, 0.4);
}

@media (max-width: 768px) {
  .container {
    padding: 0.2rem 2rem;
  }

  .top-bar {
    height: auto;
  }

  .nav-content {
    flex-direction: column;
    gap: 0;
    padding: 0.2rem 0;
  }

  .logo {
    justify-content: center;
    padding-bottom: 1rem;
  }

  .nav-menu {
    justify-content: center;
    gap: 1rem;
    padding: 0.1rem 0;
    background: inherit;
    width: 100%;

    @media (min-width: 1200px) {
      gap: 4rem;
    }
  }

  .nav-link {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.25rem;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .cta-button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .nav-menu {
    gap: 1.2rem;
  }
}
</style>