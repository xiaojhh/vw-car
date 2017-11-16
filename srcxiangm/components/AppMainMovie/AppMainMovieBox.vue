<template>
  <div class="app-main-movie-box">
    <app-main-movie-item :type="type" :movie="movie" v-for="movie in movies" :key="movie.id"></app-main-movie-item>
    <button class="more-btn">更多{{type}}电影</button>
  </div>
</template>

<script>

import AppMainMovieItem from './AppMainMovieItem'
import axios from 'axios'
export default {
  name: 'AppMainMovieBox',
  props:['url','type','city'],
  data () {
    return {
        movies:[]
    }
  },
  methods:{
    getMovies(){
      if(!this.city){return false;}  
      let that = this
      console.log('get')
      axios.get(this.url,{params:{__t:Date.now()}}).then((res)=>{
        that.movies = res.data.data.films
      })
    }
  },
  created(){
    this.getMovies()
  },
  watch:{
    city(){
      this.getMovies()
    }
  },
  components:{AppMainMovieItem}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-main-movie-box{
  padding:0px 15px;

  .more-btn{
    display:block;
    outline:none;
    background:none;
    width: 1.6rem;
    height: 0.3rem;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 0.3rem;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
}
</style>
