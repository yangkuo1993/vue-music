import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/index'
import 'mint-ui/lib/style.css'
import { Tabbar, TabItem, TabContainer, TabContainerItem, Lazyload, Swipe, SwipeItem } from 'mint-ui'
import vueScrollBehavior from 'vue-scroll-behavior'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)

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
