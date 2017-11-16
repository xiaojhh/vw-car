<template>
  
    <ul
      class="film-box"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false">

      <li @click="toDetail(film.id)" v-for="(film,i) in films" :key="i">
        <div class="film-item">
            <img :src="film.poster.origin" />
            <div class="info">
              <h3>{{film.name}}</h3>
              <p>{{film.intro}}</p>

              <p v-if="type=='now-playing'" class="cinema-watch"><span>{{film.cinemaCount}}院线上映</span><span>{{film.watchCount}}人观看</span></span></p>
              <p v-else>
                时间戳：{{film.premiereAt}}
              </p>

              <span v-if="type=='now-playing'" class="grade">{{film.grade}}</span>
            </div>

        </div>
      </li>

    </ul>

</template>

<script>
import bus from "../../bus"

import axios from "axios"

export default{
  name:"AppMovieContent",
  data(){
    return{
      films:[],
      loading:false,
      page:1,
      isCanGet:true,
      type:"now-playing"
    }
  },
  methods:{
    getFilms(){
      let that = this;
      axios.get("/mz/v4/api/film/"+that.type+"?count=7",{
        params:{page:that.page}
      }).then((res)=>{
        console.log(res.data);
        that.films = that.films.concat(res.data.data.films);
        // 无线加载  用concat 连接加载的数组
        that.loadin = false;
        if(res.data.data.page.total==that.page){
          that.isCanGet =  false;
        }
      })
    },
    loadMore(){
      if(!this.isCanGet){return ;}
      this.loading = true;
      this.page++;
      this.getFilms();
    },
    changeType(type){
      this.films=[];
      this.loading=false;
      this.page=1;
      this.isCanGet = true;
      this.type=type;
      this.getFilms();
    },
    toDetail(id){
      this.$router.push({name:"detail",params:{id}})
    },
    mounted () {
      this.getFilms()
      bus.$on("changeType",function(type){
        this.changeType(type)
      }.bind(this))
    }
  }
}

// import bus from '../../bus'
// import axios from 'axios'
// export default {
//   name: 'AppMovieContent',
//   data(){
//     return {
//       films:[],
//       loading:false,
//       page:1,
//       isCanGet:true,
//       type:'now-playing'
//     }
//   },
//   methods:{
//     getFilms(){
//       let that = this
//       axios.get("/mz/v4/api/film/"+that.type+"?count=7",{
//         params:{page:that.page}
//       }).then((res)=>{
//         console.log(res.data)
//         that.films=that.films.concat(res.data.data.films)
//         that.loading=false
//         if(res.data.data.page.total==that.page){
//           that.isCanGet=false
//         }
//       })
//     },
//     loadMore() {
//       if(!this.isCanGet){return ;}
//       this.loading = true;
//       this.page++;
//       this.getFilms()
//     },
//     changeType(type){
//       this.films=[]
//       this.loading=false
//       this.page=1
//       this.isCanGet=true
//       this.type=type
//       this.getFilms()
//     },
//     toDetail(id){
//       this.$router.push({name:'detail',params:{id}})
//     }
//   },
//   mounted(){
//     this.getFilms()
//     bus.$on("changeType",function (type) {
//         this.changeType(type)
//     }.bind(this))
//   }
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.film-box{


  .film-item{
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
    display:flex;
    justify-content:space-between;
    align-item:center;

    img{
      width:0.6rem;
      height:0.8256rem;
      flex-grow:0;flex-shrink:0;
    }
    .info{
      flex-grow:1;flex-shrink:1;
      display:flex;flex-flow:column;
      justify-content:space-between;
      padding:0px 15px;
      position:relative;
      .cinema-watch{
        display:flex;
        justify-content:space-between;
      }
      p{
        color:#8e8e8e;
      }

      .grade{
        position:absolute;
        right:15px;top:0;
        font-size:16px;color:#fc7103;
      }

    }
  }

}


</style>
