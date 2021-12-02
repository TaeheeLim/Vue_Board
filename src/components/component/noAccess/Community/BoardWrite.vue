<template>
    <div v-if="step==1" class="write-div">
        <div class="editor-page" style="color: #000">
            <ckeditor :editor="editor" 
                        v-model="editorData" 
                        :config="editorConfig"></ckeditor>
            <h1>{{editorData}}</h1>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: { }
        }
    },
    props : {
        step : Number,
    },
    //vuex 에서 함수불러올때

    methods : {
        ...mapMutations({
            hello: 'community/hello'
        })
    },

    mounted() {

    },
}
</script>

<style scoped>


</style>