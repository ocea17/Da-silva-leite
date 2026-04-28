import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)

app.mount('#app')
