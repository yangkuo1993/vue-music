import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 路由采用webpack require.ensure 实现懒加载
const Home = resolve => {
  require.ensure(['@/views/Home'], () => {
    resolve(require('@/views/Home'))
  })
} // Home主页
const Login = resolve => {
  require.ensure(['@/views/Login'], () => {
    resolve(require('@/views/Login'))
  })
} // login登录页
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '*', redirect: '/login' }
  ]
})
