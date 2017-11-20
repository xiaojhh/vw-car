import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import AppMain from '../container/AppMain/AppMain'
// import AppMovie from '../container/AppMovie/AppMovie'
// // import AppPosition from '../container/AppPosition/AppPosition'
// import AppPosition from "../container/AppPosition/AppPosition"

// import AppMine from '../container/AppMine/AppMine'
// import AppLogin from '../container/AppLogin/AppLogin'
// import AppMovieDetail from '../container/AppMovieDetail/AppMovieDetail'

var router = new Router({
  // mode: 'history',//如果配置了这个，就会使用h5 historyAPI，类似于react browserHistory，默认是hash
  routes: [//路由表
    // {//每一个对象都是一个路由规则
    //   path: '/',//当路径变成...的时候
    //   name: 'Hello',//路由名字，在js中切换路由的时候可以直接用路由名来切换
    //   component: HelloWorld,//路由对应的组件
    // }
   
  ]
})


// router.beforeEach((to, from, next) => {
//   console.log('router is change')

//   next()//必写，不写无法继续切换
// })

export default router
