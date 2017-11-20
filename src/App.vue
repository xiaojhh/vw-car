<template>
  <div id="app">     
    <TopCar></TopCar>
    <SwiperCar url="http://localhost:3000/static/car1.json" class="Car1" type="Car1"></SwiperCar>  
    <SwiperCar url="http://localhost:3000/static/car2.json" class="Car2" type="Car2"></SwiperCar>
     <SwiperCar url="http://localhost:3000/static/car3.json" class="Car3" type="Car3"></SwiperCar>
     <SwiperCar url="http://localhost:3000/static/car4.json" class="Car4" type="Car4"></SwiperCar>
    <FooterApp></FooterApp>
    <ListenBody></ListenBody>
    <router-view></router-view>

  </div>
</template>

<script>
// import demo from "./components/demo"
import TopCar from "./components/TopCar"
import SwiperCar from "./components/SwiperCar"
import FooterApp from "./container/footer/Footer"
import ListenBody from "./components/DisToTop"
export default {
  name: 'app',//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效,
  components:{
      TopCar,SwiperCar,FooterApp,ListenBody
  }

}
</script>

<style lang="scss" >
  body{
    background: #ffffff;
  }
  .Car2{
    margin-top: 0.2rem;
    width:3.35rem;
    height: 1.38rem;
    border-bottom: 0.2rem solid #ffffff;
  }
   .Car3{
     background-color: #f3f5f6;
     height: 3.38rem!important;
       border-bottom: 0.1rem solid #f3f5f6;
   }
    .Car4{
      width: 3.35rem;
      margin-top: 0.5rem;
     height: 2.71rem!important;
   }
</style>
