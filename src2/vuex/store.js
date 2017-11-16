// import Vuex from "vuex";
// import Vue  from "vue";
// // 引用
// Vue.use(Vuex);
// //使用


// //存放状态
// const state ={
//     num:1,
//     name:"allen"
// }
// //专门更改状态
// const mutations = {
//     addNumber(state){
//         state.num++
//     },
//     changeNumber(state,num){
//         state.num+=num;
//     }
// }
// //getters
// // 二次封装
// const getters={
//     Fname(state){
//         return state.name+"hello"
//     },
//     dbnum(state){
//         return state.num*2;
//     }
// }

// //存放异步操作

// const actions ={
//     getNumber(a){
//         setTimeout(function(){
//             var num = 10;
//             a.commit("changeNumber",num);
//         },2000)
//     }
// }

// const store = new Vuex.Store({
//         // 创建 store
//     state:state,
//     mutations,
//     getters,
//     actions
// })
// export default store;

import Vuex from "vuex"
import vue from "vue"

vue.use(Vuex);

const state = {
    userInfo:{
        username:"",
        password:"",
    }
}

const mutations = {
    changeUserInfo(state,userinfo){
        state.userInfo = userinfo
    },
    exit(state){
        state.userinfo={
            username:"",
            password:""
        }
    }
}

import actions from "./actions"
const store = new Vuex.Store({
    state,mutations,actions
})
export default store;