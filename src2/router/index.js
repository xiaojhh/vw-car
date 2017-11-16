import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import AppMain from '../container/AppMain/AppMain'
import AppMine from '../container/AppMine/AppMine'
import AppPosition from '../container/AppPosition/AppPosition'
import AppMovie from '../container/AppMovie/AppMovie'
import AppLogin from '../container/AppLogin/AppLogin'

var router = new Router({
  // mode: 'history',//如果配置了这个，就会使用h5 historyAPI，类似于react browserHistory，默认是hash
  routes:[ 
    {
        // {//每一个对象都是一个路由规则
    //   path: '/',//当路径变成...的时候
    //   name: 'Hello',//路由名字，在js中切换路由的时候可以直接用路由名来切换
    //   component: HelloWorld,//路由对应的组件
    // }
      path:"*",
      redirect:"/"
    },
    {
      path:"/",
      component:AppMain,
      name:"main"
    },
    {
      path:"/movie",
      component:AppMovie,
      name:"movie"
    }
    ,
    {
      path:"/mine",
      component:AppMine,
      name:"mine"
    }
    ,
    {
      path:"/position",
      component:AppPosition,
      name:"position"
    },
    {
      path:"/login",
      component:AppLogin,
      name:"login"
    }
  ]
})


export default router
