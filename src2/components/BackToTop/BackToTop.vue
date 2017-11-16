<template>
    <div class="back-to-top">
        <transition enter-active-class="fast-animate fadeInUp" leave-active-class="fast-animate fadeOutDown">
            <div v-show="isShow" class="">
                <div @click="back" class="circle">
                    <icon name="arrow-up"></icon>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default{
        name:"BackToTop",
        data(){
            return {
                isShow :false
            }
        },
        mounted(){
            console.log(1,this);
            let that = this;
            this.$parent.$el.addEventListener("scroll",function(e){
                console.log("scrolltop");
                if(this.scrollTop>300){
                    that.isShow = true;    
                }else{
                    that.isShow = false;
                }
            })
        },
        methods:{
            back(){
                this.$parent.$el.scrollTop= 0;
            }
        }
    }
</script>
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
