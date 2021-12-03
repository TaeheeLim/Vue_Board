<template>
    <div v-if="step==1" class="write-div">
        <editor-content id="tiptap" :editor="editor" />
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            editor: null,
        }
    },
    components : {
        EditorContent,
    },
    mounted() {
        this.editor = new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
            StarterKit,
        ],
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
    props : {
        step : Number,
    },
    //vuex 에서 함수불러올때

    methods : {
        ...mapMutations({
            hello: 'community/hello'
        }),
        emptyEditor(){
            this.editorData = '';
        }
    },

}
</script>

<style scoped>
#tiptap {
    color: #fff;
    height: 200px;
}
.ProseMirror {
    height : 300px;
}



</style>