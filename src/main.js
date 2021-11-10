import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'
import axios from 'axios'
import { formatDate, formatDateTime } from './utils/date'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.filter('formatDate', formatDate)
Vue.filter('formatDateTime', formatDateTime)
axios.interceptors.request.use(config => {
    if (config.push === '/admin/home') {
    } else {
        if (localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token')
        }
    }
    return config
},
error => {
    return Promise.reject(error)
})
axios.interceptors.response.use(response => {
    if (response.data.code === 401) {
        localStorage.removeItem('token')
        router.push({ name: 'Login' })
    } else if (response.data.data.token) {
        localStorage.setItem('token', response.data.data.tokenHead + response.data.data.token)
    }
    return response
},
error => {
    return Promise.reject(error)
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
