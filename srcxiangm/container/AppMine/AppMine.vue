<template>
  <div class="app-mine container">
    app-mine---<mt-button @click="exit" size="normal"  type="primary">退出</mt-button>
    <hr/>
    


  </div>
</template>

<script>

import {mapMutations,mapState,mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'AppMine',
  data:function(){
    return {
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    ...mapMutations(['exit']),
  },
  watch:{
    userInfo(val){
      if(val.username==''){
        this.$router.replace('login')
      }
    }
  },
  created(){
    this.getGoods()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
