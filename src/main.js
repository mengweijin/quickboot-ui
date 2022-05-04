import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/router.js'
import Http from './utils/http.js'

const app = createApp(App)
app.use(VueRouter)
app.mount('#app')
app.config.globalProperties.$http = Http
