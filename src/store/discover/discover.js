import * as discover from './mutations_types'
import Service from '../../common/http'
import config from '../../common/config'
export default {
  state: {
    chooseMenu: 'meun-1'
  },
  getters: {},
  mutations: {
    [discover.GET_DISCOVER_TAB] (state, payload) {
      state.chooseMenu = payload
    }
  },
  actions: {
    [discover.GET_BANNER_MUSIC] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.discover.bannerList).then((data) => {
          if (data.status === 200) {
            resolve(data.data)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}
