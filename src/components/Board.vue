<template lang="">
    <div>
        Board
        <div v-if="loading">loading board...</div>
        <div v-else>
        <div>bid:{{bid}}</div>
         <router-link :to="`/b/${bid}/c/1`" >Card 1</router-link>
         <router-link :to="`/b/${bid}/c/2`" >Card 2</router-link>
        </div>
        <hr />
        <router-view></router-view>
    </div>
</template> 
<script>
export default {
    data(){
        return{
            bid: 0,
            loading: false
        }
    },
    //컴포넌트가 생성될때 실행되는함수
    created(){
        
        this.fetchData()
    },
    methods:{
        fetchData(){
            this.loading = true
            setTimeout(()=>{
                this.bid = this.$route.params.bid
                this.loading = false
            },500
            )
        }
    }
    
}
</script>
<style lang="">
    
</style>