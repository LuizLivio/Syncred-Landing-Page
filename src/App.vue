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
  /* background-image: url('/assets/pattern.png'); */
  background-image: url('/img/logo-syncred-1.png');
  background-repeat: repeat;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
  mask: linear-gradient(to bottom, black 0%, transparent 100%);
  -webkit-mask: linear-gradient(to bottom, black 0%, transparent 100%);
}

.main-content {
  position: fixed;
  top: 70px; /* Start below TopBar */
  bottom: 60px; /* End above Footer */
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1e2661;
    border-radius: 5px;
  }

  scrollbar-width: auto;
}

@media (max-width: 1200px) {
  .main-content {
    bottom: 120px; /* Above 120px Footer */
  }
}

@media (max-width: 768px) {
  .main-content {
    top: 100px; /* Start below TopBar */
    bottom: 120px; /* Above 120px Footer */
  }
}

@media (max-width: 480px) {
  .main-content {
    bottom: 140px; /* Above 140px Footer */
  }
}
</style>