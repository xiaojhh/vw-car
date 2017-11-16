<template>
  <div class="app-main container">     
    <app-swiper url="/mz/v4/api/billboard/home"></app-swiper>
     <app-main-movie-box type="热映" url="/mz/v4/api/film/now-playing?page=1&count=5"></app-main-movie-box>
    <hr/>
    <app-main-movie-box type="即将上映" url="/mz/v4/api/film/coming-soon?page=1&count=3"></app-main-movie-box>
      <back-to-top></back-to-top>
  </div>
</template>

<script>
import AppMainMovieBox from '../../components/AppMainMovieBox/AppMainMovieBox'
import AppSwiper from '../../components/AppSwiper/AppSwiper'
import BackToTop from "../../components/BackToTop/BackToTop"
export default {
  name: 'AppMain',
  components:{
    AppSwiper,AppMainMovieBox,BackToTop
  }
}

</script>

<style scoped>

</style>
