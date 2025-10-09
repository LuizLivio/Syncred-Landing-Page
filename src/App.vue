<template>
  <div id="app">
    <TopBar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style scoped>
#app {
  padding-right: 10px;
  position: relative;
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(/Syncred-Landing-Page/assets/bg-glow-1.png);
  background-repeat: no-repeat;
  background-size: 104.17vw;
  background-position: 36.46vw 30.56vh;
  opacity: 0.;
  pointer-events: none;
  z-index: 0;
}

#app::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(/assets/bg-glow-2.png);
  background-repeat: no-repeat;
  background-size: 52.08vw;
  background-position: 75.52vw -30.56vh;
  pointer-events: none;
  z-index: 0;
}

.main-content {
  position: fixed;
  top: 70px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

@media (max-width: 1200px) {
  .main-content {
    bottom: 120px;
  }
}

@media (max-width: 768px) {
  .main-content {
    top: 100px;
    bottom: 120px;
  }
}

@media (max-width: 480px) {
  .main-content {
    bottom: 140px;
  }
}
</style>