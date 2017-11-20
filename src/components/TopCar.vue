<template>
  <div class="topcar">
      <a href="##"><img src="http://www.vw.com.cn/content/dam/vw-ngw/vw/logo/Mobile_64x64_Final.png" alt=""></a>
      <a href="##"><i class="iconfont">&#xe601;</i></a>
  </div>
</template>
<script>

    export default {
        name : "TopCar",
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss">
$vw:#0099da;
    .topcar{
        padding-left: 0.2rem;
        padding-right: 0.2rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
        position: relative;
        background-color: #fff;
        color: #808890;
        height: 0.50rem;
    //    a{
    //        height: 0
    //    }
        img{
            width: 0.32rem;
            height: 0.32rem;
        }
        i{
            font-size: 32px;
            font-weight: bolder;
            color: $vw;
        }

    }
</style>

