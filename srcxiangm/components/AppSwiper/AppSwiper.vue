<template>
  <div ref="container" class="app-swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id"><img width="100%" :title="banner.name" :src="banner.imageUrl"/></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name: 'AppSwiper',
  props:['url'],
  data () {
    return {
        banners:[]
    }
  },
  methods:{
    getBanners(){
      let that = this
      axios.get(this.url,{
        params:{__t:Date.now()}
      }).then((res)=>{
        that.banners = res.data.data.billboards
      })
    }
  },
  created(){
    this.getBanners()
  },
  updated(){
    console.log(this.banners)
    new Swiper(this.$refs.container,{
      loop:true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
