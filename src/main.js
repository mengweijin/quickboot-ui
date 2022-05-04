import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueRouter from './router/router.js'
import Http from './utils/http.js'

const app = createApp(App)
// 全局注册所有 element-plus/icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VueRouter)
app.mount('#app')
app.config.globalProperties.$http = Http
