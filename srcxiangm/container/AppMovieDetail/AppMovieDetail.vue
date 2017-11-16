<template>
  <div class="app-movie-detail container">
    app-movie-detail
    {{filmdata}}
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AppMovieDetail',
  data(){
    return {
      filmdata:{}
    }
  },
  methods:{
    getFilmData(){
      let that = this
      axios.get('/mz/v4/api/film/'+this.$route.params.id+'?__t='+Date.now()).then((res)=>{
        that.filmdata = res.data.data.film
      })
    }
  },
  created(){
    this.getFilmData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
