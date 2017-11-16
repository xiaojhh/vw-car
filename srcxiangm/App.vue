<template>
  <div id="app">     
    <app-header></app-header>

    <router-view></router-view>

  </div>
</template>

<script>

import AppHeader from './components/AppHeader/AppHeader'

export default {
  name: 'app',//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效,
  components:{
    AppHeader
  }

}
</script>

<style lang="scss" >

@import './styles/main.scss';


</style>
