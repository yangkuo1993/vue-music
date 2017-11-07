import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getters'
import playing from './modules/playing'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    playing
  }
})
