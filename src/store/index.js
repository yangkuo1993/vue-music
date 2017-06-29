import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
Vue.use(Vuex)
export const store = new Vuex.Store({
  strict: true, // 严格模式，发布时关闭
  modules: {
    user: user
  }
})
