<template>
    <div>
        <div>
            
        </div>
    </div>

</template>

<script>
export default {
    name : 'BoardBody',
    data() {
        return {
            list : {}
        }
    },
    methods: {
        
    },
    mounted() {
        axios.get('/BoardList.json').then((a)=>{
            console.log(a)
            console.log(a.data)
            this.list = a.data
        })
    },
}
</script>

<style>

</style>