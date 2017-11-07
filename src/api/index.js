import axios from '../config/http'
export default {
  // 获取推荐音乐
  // recommend music
  recommendMusic () {
    return axios.get('/personalized')
  }
}
