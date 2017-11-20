<template>
    <div class="lb" @click="myTop">
          <span class="icon icon-up sp"></span>
    </div>
</template>
<script>
    import $ from "zepto";
    export default{
        name :"DisToTop",
        data(){
            return{

            }
        },
        methods:{
            listenBody(){
                console.log(1);
            
                window.onscroll = function(){
                    var sc = document.body.scrollTop|| document.documentElement.scrollTop||0;
                    // console.log(sc);
                    if(sc>250){
                        $(".lb").addClass("ds");
                    }else{
                        $(".lb").removeClass("ds");
                    }
                }
               
               
            },
           myTop(){
                var flag=0;//判断用户是否打断
                var flag1=0;
                var timer = setInterval(function(){
                    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                    flag = scrollTop;

                    var isSpeed = Math.floor(-scrollTop/6);
                    // console.log(isSpeed);
                    if(scrollTop<=0){
                        clearInterval(timer);
                    }
                   
                    document.body.scrollTop= document.documentElement.scrollTop = scrollTop+isSpeed;
                   
                },30)
            }
        },
        created(){
             this.listenBody();
        },
        updated(){
            // this.listenBody();
        }
        
    }
</script>
<style lang="scss">
    .lb{
         display: none;
        position: fixed;
        z-index: 900;
        bottom:0.2rem;
        right: 0.15rem;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        text-align: center;
        background-color: #00b1eb;
        opacity: .5;
        .sp{
           
            text-align: center;
            line-height: 0.52rem;
            font-size: 0.24rem;
            color: #ffffff;
        }    
    }
      .ds{
            display: block;
        }
</style>

