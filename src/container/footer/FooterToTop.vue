<template>
    <div class="FootToTop" @click="myTop"> 
        <span>返回顶部  <i class="iconfont">&#xe69e;</i></span>
    </div>
</template>
<script>
    import $ from "zepto"
    export default{
        name:"FooterToTop",
        data(){
            return{

            }
        },
        methods:{
            toTop(){
                 console.log($,1);
                 $("body").scrollTop(0);
                // if( document.body){
                //       document.body.scrollTop=0;
                // }else{
                //      document.documentElement.scrollTop=0
                // }
              
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
           
        }

    }
</script>
<style lang="scss">
    .FootToTop{
        background: #dee1e3;
        height: 0.35rem;
        
        span{
            float: right;
            margin-right: 0.2rem;
            color:#2f3538;
            line-height:0.35rem;
            i{
                margin-left: 0.06rem;
                font-size: 0.14rem;
            }
        }
    }
</style>

  