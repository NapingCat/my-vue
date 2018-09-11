import Vue from 'vue'
import App from './App'
import router from './router'
// 引入使用的element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI) // 建一个component

let vRouter = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

Vue.use(vRouter)
