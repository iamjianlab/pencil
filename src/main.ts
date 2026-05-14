import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/icon/style/css'
import './styles/main.css'

createApp(App).use(router).mount('#app')
