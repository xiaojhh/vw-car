<template>
    <div class="swiper-container sw-cont" ref="sw">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="item in cars" :key="item.id">
                <img :src="item.url" :alt="'cars'+item.id">
                <h3 v-if="item.title" class="sw-h3">{{item.title}}</h3>
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
      <div class="swiper-pagination sw-pag"></div>
        
    </div>
</template>
<script>
    import axios from "axios";
    import Swiper from "swiper";
    export default {
        name:"SwiperCar",
        props:['url',"type"],
        data(){
            return {
                cars:[]
            }
        },
        methods: {
           
            getCar(){
                 var _this = this;
                axios.get(this.url).then((res)=>{
                    // console.log(res.data,2)
                    _this.cars=res.data;
                })
            }
        },
        created () {
            this.getCar();
        },
        updated(){
            // console.log(this);
            // console.log(this.$refs.sw)
            // console.log("."+this.type)
            new Swiper ("."+this.type, {
            //    direction: 'vertical',
                    autoplay: 1500,
                     loop: true,                    
                    // 如果需要分页器
                     pagination: {
                            el: '.swiper-pagination',
                        },
              
                })
        }
    }
</script>
<style lang="scss" scope>
    .swiper-container{
        height: 2.4rem;        
        img{
            width:100%;
        }
         .sw-pag{
                bottom: 5px;
        }
    }
    .sw-h3{
        padding-top: 0.2rem;
        text-align: center;
        line-height: 0.25rem;
        font-size: 0.21rem;
    }
   
</style>

