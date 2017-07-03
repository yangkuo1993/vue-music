import * as music from './mutations_types'
import Service from '../../common/http'
import config from '../../common/config'
export default {
  state: {
    // 精品推荐
    boutique: []
  },
  getters: {},
  mutations: {
  },
  actions: {
    [music.GET_BOUTIQUE_MUSIC] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.music.highquality).then((data) => {
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
