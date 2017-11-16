import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Car from '../components/Car.vue'

Vue.use(Router)

export default new Router({
  routes: [//路由表
    {path:'/',redirect:'/main'},
    {path:'/main',component:Main,name:'main'},
    {path:'/car',component:Car,name:'car'},
    {path:'*',redirect:'/'}
  ]
})
