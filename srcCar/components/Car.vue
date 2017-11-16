<template>
  <div class="car content">
    <div class="list-block">
      <ul >

        <li class="item-content" v-for="good in pureCar" :key="good.goodid">
          <div class="item-inner">
            <div class="item-title">{{good.name}} ${{good.price}}</div>
            <div class="item-after"><button @click="reduceGood(good.goodid)">-</button>&nbsp;&nbsp;{{good.num}}&nbsp;&nbsp;<button @click="addGood({goodid:good.goodid,name:good.name,price:good.price})">+</button></div>      
          </div>
        </li>

        <li class="item-content">
          <div class="item-inner">
            <div class="item-title">总数:{{all_price_num.num}}，总价钱:{{all_price_num.price.toFixed(2)}}</div>   
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

 <script>
import {mapState,mapGetters,mapMutations} from "vuex"
export default{
  name:"car",
  data(){
    return{

    }
  },
  computed:{
    ...mapState(["car"]),
    ...mapGetters(["pureCar","all_price_num"])
  },
  methods:{
    ...mapMutations(["addGood","reduceGood"])
  }
  // methods:{

  // }
}



// import {mapState,mapGetters,mapMutations} from 'vuex'
// export default {
//   name: 'car',
//   data () {
//     return {
     
//     }
//   },
//   computed:{
//     ...mapState(['car']),
//     ...mapGetters(['pureCar','all_price_num'])
//   },
//   methods:{
//     ...mapMutations(['addGood','reduceGood'])
//   },
//   mounted(){
//     // console.log(this.$store.getters.pureCar,11)
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
