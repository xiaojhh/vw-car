<template>
  <div id="app">     
     <app-header></app-header>
      <router-view></router-view>
      
      <app-footer></app-footer> 
      
  </div>
</template>

<script>

import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'app',//组件拥有name属性，不设置不影响功能，d但是设置上之后，vue在查找组件的时候会更快速高效

 
  components:{AppFooter}
}
</script>

<style>
  .a{
    height: 30px;
  }
</style>
