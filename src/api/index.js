import axios from '../config/http'
export default {
  // 获取推荐音乐
  // recommend music
  recommendMusic () {
    return axios.get('/personalized')
  },
  // 获取最新推荐音乐
  // new music
  newMusic () {
    return axios.get('/personalized/newsong')
  },
  // 获取网易云音乐热歌榜单
  hotMuiscWy (id) {
    return axios.get('/top/list?idx=' + id)
  }
}
