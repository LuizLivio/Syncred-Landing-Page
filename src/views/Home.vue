<template>
  <div class="home">
    <FGTSSection id="fgts" />
    <Partnership id="partnership" />
    <AboutUs id="about" />
  </div>
</template>

<script>
import FGTSSection from '../components/FGTSSection.vue'
import AboutUs from '../components/AboutUs.vue';
import Partnership from '../components/Partnership.vue';

export default {
  name: 'Home',
  components: {
    FGTSSection,
    AboutUs,
    Partnership
  }
}
</script>

<style scoped>
.home {
  /* Content flows naturally within scrollable main-content */
}
</style>