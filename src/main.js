import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/css/main.css'

const app = createApp(App)

// Plugin Motion pour les animations (@vueuse/motion)
app.use(MotionPlugin)

app.mount('#app')
