import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './config/http'
Vue.config.productionTip = false
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
