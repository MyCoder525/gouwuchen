import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 3000

new Vue({
  render: h => h(App)
}).$mount('#app')
