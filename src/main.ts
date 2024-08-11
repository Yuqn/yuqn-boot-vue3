import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入路由器
import router from './router'
import {createPinia} from 'pinia'
const pinia = createPinia()


// 注册element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(router)
.use(ElementPlus)
.use(createPinia())
.mount('#app')