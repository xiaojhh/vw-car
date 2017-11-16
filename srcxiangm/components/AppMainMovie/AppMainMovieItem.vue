<template>
  <div class="app-main-movie-item">
    <img  v-lazy="movie.cover.origin" />

    <div class="info-box">
      <div class="left">
        <h5>{{movie.name}}</h5>
        <p v-if="movie.cinemaCount">{{movie.cinemaCount}}家影院 {{movie.watchCount}}人观看</p>
      </div>
      <div class="right">{{type!='即将上映'?movie.grade:getTime(movie.premiereAt)}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AppMainMovieItem',
  props:['movie','type'],
  data () {
    return {
      
    }
  },
  methods:{
    getTime(time){
      var date = new Date(time)
      return (date.getMonth()+1)+'月'+date.getDate()+'日'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .app-main-movie-item{

    margin: 17px 0px ;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;

    img{
      width:100%;
    }

    .info-box{
      padding:15px 10px;
      display:flex;justify-content:space-between;align-items:center;
      h5{
        color:#333;
      }
      p{
        color:#9a9a9a;
      }

      .right{
        color:#f78360;font-size:0.18rem;
      }
    }
  }
</style>
