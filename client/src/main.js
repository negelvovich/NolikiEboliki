import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import VueCookies from 'vue-cookies'
import axios from 'axios'

import './assets/main.css'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

createApp(App).use(router).use(VueCookies).mount('#app')
