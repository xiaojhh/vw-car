// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from "mint-ui";

import 'mint-ui/lib/style.css';
Vue.use(Mint);
Vue.config.productionTip = false



// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)
Vue.component('icon', Icon)

 import 'animate.css'

// // swiper.css

 import 'swiper/dist/css/swiper.min.css'

 import store from "./vuex/store"
//


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在任意组件中都可以通过this.$route/this.$router用到和路由相关的属性和方法
  store,
  template: '<App/>',
  components: { App }
})
