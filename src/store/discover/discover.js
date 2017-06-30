import * as discover from './mutations_types'
export default {
  state: {
    chooseMenu: 'meun-1'
  },
  getters: {},
  mutations: {
    [discover.GET_DISCOVER_TAB] (state, payload) {
      state.chooseMenu = payload
    }
  }
}
