
import axios from 'axios'
import { Toast } from 'mint-ui';
// import getPosition from '../modules/getPosition'

import getPosition from "../modules/getPosition"
export default {
    login({commit},params){
        axios.get('/latiao/users/login.do',{params}).then((res)=>{
            if(res.data.username){
                commit('changeUserInfo',res.data)               
            }else{
                Toast('登陆失败')
            }
        })
    },
    // changeCity({commit}){
    //     console.log(commit,1);
    //     getPosition((city)=>{
    //         console.log(city,2)
    //         commit('changeCity',city.slice(0,-1))
    //     })
    // }

    changeCity({commit}){

        getPosition(function(city){
            console.log(city,1);
            commit("changeCity",city.slice(0,-1));
        })
    }
}