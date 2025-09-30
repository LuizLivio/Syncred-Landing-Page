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

        <nav class="nav-menu" :class="{ active: isMenuOpen }">
          <a @click.prevent="scrollToSection('fgts')" class="nav-link">FGTS</a>
          <a @click.prevent="scrollToSection('about')" class="nav-link">Sobre nós</a>
          <button @click="scrollToSection('partnership')" class="cta-button">Seja parceiro</button>
        </nav>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    scrollToSection(sectionId) {
      // Close mobile menu if open
      this.closeMenu()

      // Wait a brief moment for menu to close
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        const mainContent = document.querySelector('.main-content')

        console.log('Scrolling to:', sectionId, element, mainContent)

        if (element) {
          const topBarHeight = 70 // TopBar height margin

          if (mainContent) {
            // Try scrolling the main-content container first
            const elementTop = element.offsetTop
            mainContent.scrollTo({
              top: elementTop - topBarHeight,
              behavior: 'smooth'
            })
          } else {
            // Fallback to window scrolling
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
              top: elementTop - topBarHeight,
              behavior: 'smooth'
            })
          }
        } else {
          console.error('Element not found:', sectionId)
        }
      }, 100)
    }
  },
  mounted() {
    window.addEventListener('resize', this.closeMenu)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.closeMenu)
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
  /* 40% {
    left: 0;
    opacity: 1;
  } */
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
  gap: 4rem;
}

.nav-link {
  font-size: large;
  text-decoration: none;
  color: var(--light-blue);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2563eb;
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.cta-button {
  font-size: large;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #374151;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu gap {
    gap: 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
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
}
</style>