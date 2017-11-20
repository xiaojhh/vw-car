// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import Zepto from "zepto"

// Vue.use(Zepto)
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)
Vue.component('icon', Icon)


// animate.css

import 'animate.css'

// swiper.css

import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false//去掉生产提示

import store from './vuex/store'
import "./styles/main.css"
/* eslint-disable no-new */
new Vue({//根实例
  el: '#app',
  router,//在任意组件中都可以通过this.$route/this.$router用到和路由相关的属性ヘ方法
  store,//在任意组件中都可以通过this.$store来获取到操作store的属性ヘ方法
  template: '<App/>',// 根实例的模板变成了根组件，所以这时，根实例ヘ根组件合二为一
  components: { App }
})

