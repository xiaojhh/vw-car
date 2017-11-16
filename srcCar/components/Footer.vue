<template>
    
    <nav class="bar bar-tab footer">
        <router-link :to="{name:nav.path}" active-class="active" v-for="(nav,i) in navs" :key="nav.icon" class="tab-item external" @click="turnto">
            <span :class="'icon icon-'+nav.icon"></span>
            <span class="tab-label">{{nav.text}}</span>
        </router-link>
    </nav>
</template>

<script>

export default {
    name:'footer',
    data(){
        return {
            navs:[
                {text:'首页',icon:'home',path:'main'},
                {text:'购物车',icon:'cart',path:'car'}
            ]
        }
    },methods:{
        turnto(){
            console.log(this.$route)
            console.log(this.$router)
            //this.$router.back()//回退上一个path
            //this.$router.go(-1)//回退上一个path
            // this.$router.push('settings')//跳转后并在path队列里记录一次
            // this.$router.replace('settings')//直接跳转，不能回退回去，因为不记录
        }
    }
}

</script>

<style>
    
</style>