import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css' // 重置样式的第三方组件库
import '@/assets/styles/common.less' // 自己写的重置样式和公共样式

import fineUI from '@/components/fine-ui'
import '@/assets/fonts/iconfont.css'

createApp(App).use(store).use(router).use(fineUI).mount('#app')
