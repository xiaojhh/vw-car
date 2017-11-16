<template>
  <header class="app-header">
    <div class="info-box">
      <div class="left" @click="isNavShow=!isNavShow">
          <span><icon name="bars"></icon></span>
          <span>{{title}}</span>
      </div>
      <div class="right">
        <span><icon name="user-o"></icon></span> 
        <router-link to="position">北京</router-link>
      
      </div>
    </div>

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="mask" v-if="isNavShow" @click="change()"></div>
    </transition>

    <transition enter-active-class="fast-animate slideInLeft" leave-active-class="fast-animate slideOutLeft">
      <nav class="nav" v-if="isNavShow">
        <ul>
          <li  class="nav-item" v-for="(nav,i) in navs" :key="i"><a @click="change(nav.path)">{{nav.title}}<icon name="angle-right"></icon></a></li>
        
        </ul>
      </nav>
    </transition>

  </header>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: 'AppHeader',
  data () {
    return {
      isNavShow:false,
      navs:[{title:"首页",path:"/"},{title:"影片",path:"/movie"},{title:"影院",path:"/movie"},{title:"商城",path:"/movie"},{title:"我的",path:"/mine"},{title:"卖座卡",path:"/position"}]
    }
  },
  computed:{
    title(){
      switch(this.$route.name){
        case "main":  return "卖座电影"; break;       
        case "movie": return "卖座电影"; break;
        case "position": return "选择城市"; break;
        case "mine": return "我的"; break;
         case "login": return "登录"; break;
        default:return "卖座电影";break;
      }
    },
    // user_info(){
    //   return this.$store.userInfo;
    // }
    ...mapState(['userInfo'])
  },
  methods:{
    change(path){
      this.isNavShow = false;
      if(path){
        if(path=='/mine'&&!(this.userInfo.username)){
            this.$router.push("login")
        }else{
            this.$router.push(path) 
        }
        console.log(this);
      
      }
      
    }
  },
  mounted(){
  //   let that = this;
  //   //当路由切换时让导航回去
  //   this.$router.beforeEach((to, from, next) => {
  //   console.log("change")
  //   // console.log(to)
  //   // console.log(from)
  //   that.isNavShow = false;
  //   next()//必须写,不写无法继续切换
  // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .fast-animate{
    animation-duration:0.5s;
  }
  .app-header{
    position:absolute;
    top:0;left:0;width:100%;
    height:50px;
    background:#282828;
    
    .info-box{
      width:100%;
      height:50px;
      background:#282828;
      display:flex;
      justify-content:space-between;
      position:relative;
      z-index:999;
    }
    .left,.right{
      position:relative;
     
      height:100%;
    }
    span{
        display:block;
    }
    .left,.right{
      display:flex;
      span:first-child{
        width:0.48rem;
        height:50px;
       display:flex;
       justify-content:center;
       align-items:center;
       color:#999;
      }
      span,a:last-child{
        padding:0rem 0.14rem;
        height:50px;
        line-height:50px;
        color:#fff;
      }
    }
    .right{
      flex-direction:row-reverse;
    }
    .mask,.nav{
      width:100%;
      height:100vh;
      background:rgba(0,0,0,0.3);
      position:absolute;
      top:0;left:0;
      z-index:997;
    }
    .nav{
      z-index:998;
      width:2.65rem;
      background:#282828;
      padding-top:50px;
      li{
          height:50px;
        }
      a{
        height:50px;
        padding:0px 0.16rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#999;
        
      }
    }
  }

</style>