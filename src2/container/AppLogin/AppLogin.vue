<template>
  <div class="app-login container">
     <form @submit.prevent="login({username,password})">
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" placeholder="输入手机号/邮箱" >
          <span ></span>
          <div class="input-bg"></div>
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" placeholder="输入密码/验证码" >
          <span ></span>
          <div class="input-bg"></div>
        </div>
        <button type="submit" class="center-block submit" >登录</button>
     </form>
  </div>
</template>

<script>
    import {mapActions,mapState} from "vuex";
    export default{
        name :"AppLogin",
        data(){
            return{
                username:"",
                password:""
            }
        },
        methods:{
            ...mapActions(["login"])
        },
        computed:{
            ...mapState(["userInfo"])
        },
        watch:{
            userInfo(val){//新值
                // console.log("hahah");
                if(val.username){
                     console.log("hahah");
                     console.log(val.username);
                   // this.$router.replace("mine");
                   console.log(this.$router.replace);
                    this.$router.replace('mine');
                }
            }
        }

    }

    // import Son from "./ABC"
    // import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
    // export default{
    //     name:"AppLogin",
    //     data(){
    //         return{
    //                //num:this.$store.state.num
    //                  //  在组件中用计算属性挂载 数据
    //         }
      
    //     },
    //     // computed:{
    //     //     //原始写法 不用mapState
    //     //     num(){ 
    //     //         return this.$store.state.num
    //     //     }
           
    //     // },
    //     // computed:mapState(['num',"name"]),
    //     // computed: mapState({
    //     //   name:(state)=>{
    //     //       return state.name+"jh"
    //     //         // 对数据二次处理， 不会影响原数据  
    //     //     },
    //     //   vuexnum:"num"
    //     // //   可以取别名  值是store 里面的 
    //     // }),

    //     computed: {
    //           ...mapState({
    //                 name:(state)=>{
    //                     return state.name+"jh"
    //                         // 对数据二次处理， 不会影响原数据  
    //                     },
    //                 vuexnum:"num"
    //                 //   可以取别名  值是store 里面的 
    //             }),
    //             // Fname(){
    //             //     return this.$store.getters.Fname
    //             // },
    //             // dbnum(){
    //             //     return this.$store.getters.dbnum
    //             // }
    //             ...mapGetters(["Fname","dbnum"])
    //     },



    //     mounted () {
    //         console.log(this);
    //     },
    //     // methods:{
    //     //     // addNumber1(){
    //     //     //     this.$store.commit("addNumber");
    //     //     // }
    //     // },

    //     // methods:mapMutations([
    //     //     'addNumber'
    //     // ]),
    //     methods:{
    //         ...mapMutations(["addNumber"]),
    //         // getNuber(){
    //         //     console.log(this);
    //         //     this.$store.dispatch("getNumber");
    //         //  action里面的方法使用dispatch 同步异步的区别
    //         // }
    //         ...mapActions(["getNumber"])
    //     },
    //     components:{
    //         Son
    //     }

    // }
</script>
<style scoped lang="scss">
.app-login{
  background:#f6f6f6;
}
  form{
    padding:0px 0.31rem;

    .form-group{
      margin-top:30px;
      position:relative;
      input{
          border: none;
          background:none;
          border-radius: 0px;
          box-shadow: none;
          outline: none;
          display: block;
          width: 100%;
          height: 34px;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42857143;
          color: #555;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
      }
      .input-bg{
          position: absolute;
          top: 20px;
          height: 12px;
          width: 100%;
          border: solid #c4c4c4;
          border-width: 0 1px 1px 1px;
      }
    }

  }
  .submit{
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    margin-top: 45px;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
button, a {
    outline: none;
}

</style>
