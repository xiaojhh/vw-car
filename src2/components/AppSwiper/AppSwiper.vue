<template>
  <div class="app-swiper swiper-container" ref="container">  
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <img :src="banner.imageUrl" width="100%" :title="banner.name" />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from "swiper"
export default {
  name: 'AppSwiper',
  props:["url"],
  data(){
      return {
          banners:[]
      }
  },
  methods:{
      getBanners(){
          let that = this;
          axios.get(this.url,{
              params:{__t:Date.now()}
          }).then((res)=>{
            //   console.log(res.data)
            that.banners = res.data.data.billboards
          })
      }
  },
  created(){
      this.getBanners()
  },
  updated () {
    //   console.log(this.banners);
      new Swiper(this.$refs.container,{
          loop:true,
          autoplay:true
      })
  }
}


</script>

<style scoped>

</style>
