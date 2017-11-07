import * as types from '../mutation_types'
import api from '../../api/index'
const state = {
  name: '1234'
}

const getters = {

}

const mutations = {
  [types.MUSIC_PLAYING] (state) {
    state.name = '9999'
  }
}

const actions = {
  async musicRecommend ({ commit }, product) {
    var demo = await api.recommendMusic()
    console.log(demo)
    commit(types.MUSIC_PLAYING)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
