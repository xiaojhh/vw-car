

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    userInfo:{
        nickname:'',
        username:''
    },
    // city:''
    city:""
}
const getters = {
    sonMoney(state){
        return state/2
    }
}
const mutations = {
    changeUserInfo(state,userinfo){
        state.userInfo = userinfo
    },
    exit(state){
        state.userInfo={
            nickname:'',
            username:''
        }
    },
    // changeCity(state,city){
    //     state.city = city
    // }
    changeCity(state,city){
        state.city = city
    }
    // 改变属性
}


import actions from './actions'
const store = new Vuex.Store({
    state,mutations,actions,getters
})

export default store