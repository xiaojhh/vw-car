<template>
  <div class="app-login container">
      <span> {{vuexnum}}--{{name}}--{{Fname}}--{{dbnum}}</span>
        <button @click="addNumber">+</button>
        <hr>
  </div>
</template>
<script>
     import Son from './ABC'
     import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
    export default{
        name:"AppLogin",
        data(){
            return{
                // num:this.$store.state.num
            }
        },
        // computed:{
        //     //原始写法，不用mapState
        //     num(){
        //         return this.$stroe.state.num;
        //     }
        // }

        // computed:mapState(["num","name"]),
        // computed:mapState({
        //     name:(state)=>{
        //         //对数据进行二次处理，不会影响原数据
        //         let name = state.name.toLowerCase();
        //         return name.ssubstr(0,1).toUpperCase()+name.substr(1);
        //     },
        //     vuexnum:"num"//可以取别名
        // })
        computed:{
            // finisheTode(){
            //     return todos;
            // },
            ...mapState({
                name:(state)=>{
                    //对数据进行二次处理，不会影响原数据
                    let name = state.name.toLowerCase();
                    return name.substr(0,1).toUpperCase()+name.substr(1);
                },
                vuexnum:"num"//可以取别名
            }),
            ...mapGetters(["Fname","dbnum"])
        },
        mounted(){
            console.log(this);
        },
        methods:{
            ...mapActions(["getNumber"]),
            ...mapMutations(["addNumber"])
        },
        components:{Son},
        updated(){
            console.log("updated");
        }
    }
</script>
<style>

</style>

