import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPhone,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faFacebookF, faInstagram, faWhatsapp, faEnvelope, faPhone, faChevronUp)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')