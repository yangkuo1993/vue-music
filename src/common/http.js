import Vue from 'vue'
import axios from 'axios'
import config from './config'
let service = axios.create({
  baseURL: config.baseUrl
})
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
Vue.prototype.$http = axios
export default service
