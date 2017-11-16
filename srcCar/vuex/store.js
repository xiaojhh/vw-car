import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const state = {
    car:{
        username:"abc",
        goods:localStorage.goods?JSON.parse(localStorage.goods):[]
    }
}
const getters = {
    pureCar(state){
        return state.car.goods
    },
    all_price_num(state){
        let all = {price:0,num:0};
        state.car.goods.forEach((item,i)=>{
            all.num+=item.num;
            all.price+=item.num*item.price
        })
        console.log(all);
        return all;
    }
}


const mutation1 = {
    addGood(state,{goodid,price,name}){
        let goods = state.car.goods;
        let isHas = false;
        for(var i = 0 ; i<goods.length;i++){
            if(goods[i].goodid==goodid){
                goods[i].num++;
                isHas = true;
                break;
            }
        }
        if(!isHas){
            goods.push({
                goodid,price,name,num:1
            })
        }
        localStorage.goods= JSON.stringify(goods);
    }
}
const mutation2={
    reduceGood(state,goodid){
        let goods = state.car.goods;
        for(var i = 0 ; i< goods.length;i++){
            if(goods[i].goodid==goodid){
                goods[i].num--;
                if(goods[i].num==0){
                    goods.splice(i,1);
                }
               
            }
            break;
        }
    }
}

const mutations = Object.assign({},mutation1,mutation2);


const store = new Vuex.Store({
    mutations,state,getters

})

export default store ;


// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const state = {
//     car:{username:'abc',
//         goods:localStorage.goods?JSON.parse(localStorage.goods):[]
//     }
// }

// const getters = {
//     pureCar(state){
//         return state.car.goods
//     },
//     all_price_num(state){
//         let all={price:0,num:0}
//         state.car.goods.forEach((item,i)=>{
//             all.num+=item.num;
//             all.price+=item.num*item.price
//         })
//         return all
//     }
// }

// const mutation1 = {
//     addGood(state,{goodid,price,name}){
//         let goods = state.car.goods 
//         let isHas = false
//         for(var i = 0;i<goods.length;i++){
//             if(goods[i].goodid==goodid){
//                 goods[i].num++
//                 isHas=true
//                 break;
//             }
//         }
//         if(!isHas){
//             goods.push({goodid,price,name,num:1})
//         }

//         localStorage.goods = JSON.stringify(goods)
//     }
// }
// const mutation2 = {
//     reduceGood(state,goodid){
//         let goods = state.car.goods 
//         for(var i = 0;i<goods.length;i++){
//             if(goods[i].goodid==goodid){
//                 goods[i].num--
//                 if(goods[i].num==0){
//                     goods.splice(i,1)
//                 }
//                 break;
//             }
//         }
//         localStorage.goods = JSON.stringify(goods)
//     }
// }

// const mutations = Object.assign({},mutation1,mutation2)

// const store = new Vuex.Store({
//     state,getters,mutations
// })

// export default store

