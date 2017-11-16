<template>
  <div class="main content">
    <div class="card" v-for="good in goods" :key="good.id">
      <div class="card-header">{{good.name}}</div>
      
      <div class="card-footer">
        <div class="row" style="width:100%;">
          <div class="col-50">${{good.price}}</div>
          <div class="col-50"><button @click="addGood({goodid:good.id,name:good.name,price:good.price})" class="button  button-fill button-danger">加入购物车</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'

  export default {
    name:"main",
    data(){
      return{
        goods:[]
      }
    },
    methods:{
      
      getGoods(){
        let _this = this;
        axios.get("/static/goods.json").then((res)=>{
          _this.goods = res.data;
        })
      },
      ...mapMutations(['addGood'])

    },
    created(){
      this.getGoods();
    }

    
  }


// export default {
//   name: 'main',
//   data () {
//     return {
//       goods:[]
//     }
//   },
//   methods:{
//     getGoods(){
//       let that = this
//       axios.get("/static/goods.json").then((res)=>{
//         that.goods = res.data
//       })
//     },
//     ...mapMutations(['addGood'])
//   },
//   created(){
//     this.getGoods()
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
