<template>
  <div class="app-main container">
    <app-swiper url="/mz/v4/api/billboard/home"></app-swiper>
    <app-main-movie-box type="热映" :city="city" :url="'/mz/v4/api/film/now-playing?city='+city+'&page=1&count=5'"></app-main-movie-box>
    <hr/>
    <app-main-movie-box type="即将上映" :city="city" :url="'/mz/v4/api/film/coming-soon?city='+city+'&page=1&count=3'"></app-main-movie-box>
  
    <back-to-top></back-to-top>

  </div>
</template>

<script>

import axios from 'axios'
import AppMainMovieBox from '../../components/AppMainMovie/AppMainMovieBox'
import AppSwiper from '../../components/AppSwiper/AppSwiper'
import BackToTop from '../../components/BackToTop/BackToTop'
import {mapState} from 'vuex'
export default {
  name: 'AppMain',
  components:{
    AppSwiper,AppMainMovieBox,BackToTop
  },
  // beforeRouteLeave: (to, from, next) => {
  //   console.log('leave')
  //   //控制AppHeader组件的数据
  //   next()
  // },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    axios.get('/db/v2/movie/in_theaters').then((res)=>{
      console.log(res.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
