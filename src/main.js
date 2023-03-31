import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

window.eventBus = mitt()

app.use(router, axios, VueAxios)

app.mount('#app')
