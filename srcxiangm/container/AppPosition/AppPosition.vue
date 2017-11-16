<template>
  <div class="app-position container">
    <div class="position-city">
      <p>GPS定位你所在城市</p>
      <ul class="city-group">
        <li class="city-item now">{{city}}</li>
      </ul>
    </div>
    <div class="position-city">
      <p>热门城市</p>
      <ul class="city-group">
        <li @click="changeCity(hotcity)" v-for="(hotcity,i) in citys" :key="i" class="city-item">{{hotcity}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState ,mapMutations} from "vuex"
export  default {
    name:"AppPosition",
    data(){
      return {
        citys:['北京','永州','上海','深圳']
      }
    },
    computed:{
      ...mapState(["city"])
    },
    methods: {
      // ...mapMutations(["changeCity"])
        changeCity(hotcity){
          this.$store.commit("changeCity",hotcity);
          this.$router.push("main");
        }
    }
}



// import {mapState,mapMutations} from 'vuex'
// export default {
//   name: 'AppPosition',
//   data(){
//     return {citys:['北京','上海','深圳','广州']}
//   },
//   computed:{
//     ...mapState(['city'])
//   },
//   methods:{
//     // ...mapMutations(['changeCity']),
//     changeCity(hotcity){
//       this.$store.commit('changeCity',hotcity)
//       this.$router.push('main')
//     }
//   }
// }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.position-city{

  p{
    padding:10px 0.15rem;
  }

  .city-group{
    background:#fff;
    overflow:hidden;
    .city-item{
          width: 25%;
          font-size: 16px;
          line-height: 46px;
          text-align: center;
          display: block;
          float:left;
          cursor: pointer;
          color: #838383;
          border-bottom: #ebebeb 1px solid;
          &.now{
            color:#e2941a;
          }
    }
  }

}


</style>
