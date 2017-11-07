// import * as types from './mutation_types'
import api from '../api/index'
export default {
  async demo ({ commit }, product) {
    var demo = await api.recommendMusic()
    console.log(demo)
  }
}
