import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './config/http'
import { Tab, Tabs } from 'vant'
Vue.component(Tab.name, Tab)
Vue.component(Tabs.name, Tabs)
Vue.config.productionTip = false
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
