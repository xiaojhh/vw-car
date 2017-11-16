

// const getPsoition = (cb)=>{
//     //获取用户所在城市信息
    
//     //实例化城市查询类
//     var citysearch = new AMap.CitySearch();
//     //自动获取用户IP，返回当前城市
//     citysearch.getLocalCity(function(status, result) {
//         if (status === 'complete' && result.info === 'OK') {
//             if (result && result.city && result.bounds) {
//                 cb(result.city);
//             }
//         }
//     });

// }

// export default getPsoition

   //获取用户所在城市信息
  const getPsoition = (cb)=> {

    //实例化城市查询类
    var citysearch = new AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
                cb(result.city);
            }
        } 
    });
}

export default getPsoition;