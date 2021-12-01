<template>
    <div v-if="step==1" class="write-div">
        <div>
            <QuillEditor theme="snow" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    props : {
        step : Number,
    },
    //vuex 에서 함수불러올때
    mutations : {
        ...mapMutations[{

        }],
        ...mapActions[{

        }],
    },

    methods : {
        
    },

    mounted() {

    },
    
    created() {
        
    },
    beforeCreate(){

    },

}
</script>

<style>
#editor {
    background-color: gray;
}
</style>