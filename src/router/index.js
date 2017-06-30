import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 路由采用webpack require.ensure 实现懒加载
// const Home = resolve => {
//   require.ensure(['@/views/Home'], () => {
//     resolve(require('@/views/Home'))
//   })
// } // Home主页
const Login = resolve => {
  require.ensure(['@/views/Login'], () => {
    resolve(require('@/views/Login'))
  })
} // login登录页
const Discover = resolve => {
  require.ensure(['@/views/discoverMusic'], () => {
    resolve(require('@/views/discoverMusic'))
  })
} // 发现音乐页
const MyMusic = resolve => {
  require.ensure(['@/views/myMusic'], () => {
    resolve(require('@/views/myMusic'))
  })
} // 发现音乐页
const Friends = resolve => {
  require.ensure(['@/views/friends'], () => {
    resolve(require('@/views/friends'))
  })
} // 朋友页
const Account = resolve => {
  require.ensure(['@/views/account'], () => {
    resolve(require('@/views/account'))
  })
} // 账号页
export default new Router({
  routes: [
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
      children: [
        {
          path: 'login1',
          name: 'Login1',
          component: Login
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mymusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    { path: '*', redirect: '/discover' }
  ]
})
