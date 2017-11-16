<template>
  <div class="app-movie container">
    <!-- <AppMovieNav></AppMovieNav>
    
    <AppMovieContent></AppMovieContent>
    <BackToTop></BackToTop> -->
      <!-- <div class="a">
        a
      </div>
      <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="(item,i) in list" :key="i">{{ item }}</li>
    </ul> -->
      <AppMovieNav></AppMovieNav>
    
    <AppMovieContent></AppMovieContent>
    <BackToTop></BackToTop>
  </div>
</template>

<script>

import BackToTop from "../../components/BackToTop/BackToTop"
import AppMovieNav from "./AppMovieNav"
import AppMovieContent from "./AppMovieContent"
  export default {
    name:"AppMovie",
    data(){
      return{

      }
    },
    components: {
      BackToTop,AppMovieNav,AppMovieContent
    }
  }

  // export default {
  //   name:"AppMovie",
  //   data(){
  //     return{
  //       list:[1,2,3,4,5]
  //     }
  //   },
  //   methods:{
  //     loadMore() {
  //       this.loading = true;
  //       setTimeout(() => {
  //         let last = this.list[this.list.length - 1];
  //         for (let i = 1; i <= 10; i++) {
  //           this.list.push(last + i);
  //         }
  //         this.loading = false;
  //       }, 2500);
  //     }
  //   }
  // }





// import BackToTop from '../../components/BackToTop/BackToTop'
// import AppMovieNav from './AppMovieNav'
// import AppMovieContent from './AppMovieContent'
// export default {
//   name: 'AppMovie',
//   data(){
//     return {
      
//     }
//   },
 
//   components:{AppMovieNav,AppMovieContent,BackToTop}
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.app-movie{
  background:#fff;
  padding-left:15px;
  padding-right:15px;
}
.a{
  height: 500px;
}

</style>
