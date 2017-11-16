export default{
    login({commit},params){
        console.log(params);
        commit("changeUserInfo",params)
    }
}