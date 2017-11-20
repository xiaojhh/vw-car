<template>
<div>
    <div v-for="(item,i) in a" :key="i">
        {{item}}
        <div v-if="i==0">
            a
        </div>
         <div v-if="i==2">
            aa
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name :"demo",
        data(){
            return{
                a:["1","2","3"]
            }
        }
    }    
</script>
<style>

</style>

