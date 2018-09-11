import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 分模块打包，webpack中利用require.ensure()实现按需加载
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const homeMenu = r => require.ensure([], () => r(require('../page/homeMenu')), 'homeMenu')
const home = r => require.ensure([], () => r(require('../page/home')), 'home')

const routes = [
  {
    path: '/', // http://localhost:8080/#/ ->是默认打开路径
    component: login
  }, {
    path: '/homeMenu',
    component: homeMenu,
    name: '',
    children: [{
      path: '/',
      home: home,
      meta: ['首页', '首页']
    }
    ]
  }
]
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production' // process.env获取配置信息
})
