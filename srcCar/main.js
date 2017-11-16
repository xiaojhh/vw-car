// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false//去掉生产提示
import store from './vuex/store'
/* eslint-disable no-new */
new Vue({//根实例
  el: '#app',
  router,
  store,
  template: '<App/>',// 根实例的模板变成了根组件，所以这时，根实例ヘ根组件合二为一
  components: { App }
})

