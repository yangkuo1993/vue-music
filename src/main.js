import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/index'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem, TabContainer, TabContainerItem, Lazyload } from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueScrollBehavior from 'vue-scroll-behavior'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.use(Lazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(vueScrollBehavior, { router: router })

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
