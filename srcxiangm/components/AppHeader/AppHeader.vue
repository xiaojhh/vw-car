<template>
  <header class="app-header">
    <div class="info-box">
      <div class="left" @click="isNavShow = !isNavShow">
        <span><icon name="bars"></icon></span>     
        <span>{{title}}</span>
      </div>
      <div class="right">       
          <span><icon name="user-o"></icon></span>     
          <router-link to="position">{{city}}</router-link>
      </div>
    </div>
    
    

    <transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
      <div @click="change()" v-if="isNavShow" class="mask"></div>
    </transition>
    <transition enter-active-class="fast-animate slideInLeft"  leave-active-class="fast-animate slideOutLeft">
      <nav v-if="isNavShow" class="nav">
        <ul>
          <li class="nav-item" v-for="(nav,i) in navs" :key="i"><a @click="change(nav.path)">{{nav.title}}  <icon name="angle-right"></icon></a></li>
        </ul>
      </nav>
    </transition>
    
  </header>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name:'AppHeader',
  data(){
    return {
      isNavShow:false,
      navs:[
        {title:'首页',path:'/'},{title:'影片',path:'/movie'},{title:'影院',path:'/movie'},{title:'商城',path:'/movie'},{title:'我的',path:'/mine'},{title:'卖座卡',path:'/movie'}
      ]
    }
  },
  computed:{
    title(){
      switch(this.$route.name){
        case 'main': return '卖座电影';break;
        case 'movie': return '卖座电影';break;
        case 'position': return '选择城市';break;
        case 'mine': return '我的';break;
        case 'login': return '登陆';break;
        default :
          return '卖座电影';break;
      }
    },
    ...mapState(['userInfo','city'])
    // user_info(){
    //   return this.$store.userInfo
    // }
  },
  methods:{
    change(path){
      this.isNavShow=false;
      if(path){
        if(path=='/mine'&&!this.userInfo.username){
          this.$router.push('login')
        }else{
          this.$router.push(path)
        }        
      }
      
    },
    ...mapActions(['changeCity'])
  },
  created(){
    this.changeCity()
  },
  mounted(){
    let that = this
    //当路由切换的时候，让导航回去
    // this.$router.beforeEach((to, from, next) => {
    //   console.log('router is change')
    //   that.isNavShow = false
    //   next()//必写，不写无法继续切换
    // })
  },
}
</script>

<!-- 999 efefefAdd "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


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
    height:100%;
  }

  span{
      display:block;
  }

  .left,.right{
    display:flex;
    span:first-child{
      width:0.48rem;
      heigt:50px;
      display:flex;
      justify-content:center;
      align-items:center;
     
      color:#999;
    }

    span,a:last-child{
      padding:0px 0.14rem;
      line-height:50px;
      color:#efefef;
    }

  }
  .right{
     flex-direction:row-reverse;
     span:last-child{
      color:#999;
    }
  }


  .mask,.nav{
    width:100%;
    height:100vh;
    background:rgba(0,0,0,0.3);
    position:absolute;
    top:0;
    left:0;
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
      height:100%;
      padding:0px 0.16rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#999;
    }
  }

}
</style>


