<template>
  <div class="app-movie-nav">
    <div :class="{active:type=='now-playing'}" @click="changeType('now-playing')" class="nav">正在热映</div>
    <div :class="{active:type=='coming-soon'}" @click="changeType('coming-soon')" class="nav">即将上映</div>
    
  </div>
</template>

<script>
import bus from '../../bus'
export default {
  name: 'AppMovieNav',
  data(){
    return {
      type:'now-playing'
    }
  },
  methods:{
    changeType(type){
      this.type = type
      bus.$emit('changeType',type)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../../styles/_mixins.scss';

.app-movie-nav{
  border-bottom: solid #fe6e00 1px;
  @include clearfix;
  .nav{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
    &.active{
      color: #fe6e00;
      border-bottom: solid;
    }
  }

}

</style>
