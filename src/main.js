import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import emailjs from '@emailjs/browser'
emailjs.init('R5WloMC3WIMuL9Poy')

// ─── Easter egg console ───
console.log(
  '%c Salut !',
  'color:#6DC319;font-size:20px;font-weight:bold;'
)
console.log(
  '%cVous êtes curieux ? C\'est bien ! N\'hésitez pas à explorer le code et mon site web : oceaneleite.fr !',
  'color:#6DC319;font-size:13px;'
)
console.log(
  '%cSi vous voulez me contacter : oceane.leitepro@gmail.com',
  'color:#6DC319;font-size:13px;font-style:italic;'
)

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)

app.mount('#app')
