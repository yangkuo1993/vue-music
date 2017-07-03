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
    },
    [music.MUSIC_PERSONALIZED] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.music.personalized).then((data) => {
          if (data.status === 200) {
            resolve(data.data)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    },
    [music.PRIVATE_CONTENT] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.music.privatecontent).then((data) => {
          if (data.status === 200) {
            resolve(data.data)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    },
    [music.NEW_MUSIC_ALBUM] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.music.album).then((data) => {
          if (data.status === 200) {
            resolve(data.data)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    },
    [music.PERSONALIZED_MV] ({commit, state}) {
      return new Promise((resolve, reject) => {
        Service.get(config.music.personalizedMv).then((data) => {
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
