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
  // 获取推荐音乐
  async musicRecommend ({ commit }) {
    var bkData = await api.recommendMusic()
    commit(types.MUSIC_PLAYING)
    return bkData
  },
  async musicNew ({ commit }) {
    var bkData = await api.newMusic()
    return bkData
  },
  // 获取网易云音乐热歌榜单
  async hotMusic ({ commit }) {
    var bkData = await api.hotMuiscWy(1)
    return bkData
  },
  // 搜索音乐
  async searchMusic ({commit}, musicInfo) {
    var bkData = await api.searchMusic(musicInfo)
    return bkData
  },
  // 搜索建议
  async searchSuggest ({commit}, suggest) {
    var bkData = await api.searchSuggest(suggest)
    return bkData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
