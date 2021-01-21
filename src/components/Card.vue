<template lang="">
    <div>
        Card
        <div v-if="loading">loading card...</div>
        <div v-else>cid: {{cid}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cid: 0 ,
            loading: false
        }
    }, 
    //방법 1-1
     /* created(){
        this.fecthData()
    }, */
     
//route객체를 감시 변경되면 함수실행
  
    watch:{
        //방법1-2 객체로 설정
        '$route': {
            //해당함수실행
            handler: 'fecthData',
            //즉시실행
            immediate: true 
        } 
        //방법 1-1 
        /* '$route'(){
            this.fecthData()
        } */
    },
    methods:{
        fecthData(){
            this.loading = true
            setTimeout(()=>{ 
                this.cid = this.$route.params.cid
                this.loading = false
            },500
            )
        }
    }
}
</script>
<style lang="">
    
</style>