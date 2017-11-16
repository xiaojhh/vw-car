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
import { mapActions,mapState } from 'vuex'
export default {
  name: 'AppLogin',
  data(){
    return {
      username:'',password:''
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    ...mapActions(['login'])
  },
  watch:{
    userInfo(val){
      if(val.username){
        this.$router.replace('mine')
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
