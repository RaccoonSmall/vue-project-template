// The Vue build version to load with the `import` command
// 导入Vue 基本库的
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

//导入第三方组件库
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/style/index.less'

// 数据请求支持，基于Promise 的HTTP库
import axios from './http'

Vue.config.productionTip = false
Vue.use(iview);

new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
