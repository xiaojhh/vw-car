<template>
  <div class="back-to-top">
    <transition enter-active-class="fast-animate fadeInUp" leave-active-class="fast-animate fadeOutDown">
      <div  v-show="isShow" class="">
        <div @click="back" class="circle">
          <icon name="arrow-up"></icon>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  data () {
    return {
        isShow:false
    }
  },
  mounted(){
    let that = this
    this.$parent.$el.addEventListener("scroll",function(e){
      if(this.scrollTop>300){
          that.isShow = true
      }else{
          that.isShow = false
      }
    })
  },
  methods:{
    back(){
      this.$parent.$el.scrollTop=0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .back-to-top{
     
      
      position:fixed;
      right:0;bottom:0;
  }
  .back-to-top>div{
     padding:0.1rem;
  }
  .circle{
    width:0.48rem;
    height:0.48rem;
    border-radius:50%;
    background:#282828;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    
  }
</style>
