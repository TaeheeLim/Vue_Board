<template>
    <!-- <div v-if="step==1" class="write-div"> -->
        <editor @exportContent="getContent"/>
        <div id="write-btn">
            <button type="button" @click="insert">등록</button>
        </div>
    <!-- </div> -->
</template>

<script>
import { mapMutations } from 'vuex';
import ImageCompress from 'quill-image-compress';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import editor from '../../global/editor.vue'


export default {

    name: 'App',
    data() {
        return {
            editorData : '',
            text : 'hello',
            modules : {
                module: ImageCompress,
                options: {
                    quality: 0.7,
                    maxWidth: 100,
                    maxHeight : 100,
                    imageType: 'image/jpeg',
                    debug: true,
                    supressErrorLogging : false,
                
                }
            },
            contents : {
                "ops": [
                        {
                        "insert": ""
                        }
                    ]
            },
        }
    },
    props : {
        step : Number,
        category : String
    },
    components : {
        editor,
    },
    //vuex 에서 함수불러올때

    methods : {
        ...mapMutations({
            hello: 'community/hello'
        }),
        emptyEditor(){
            this.editorData = '';
        },
        change(e){
            console.log(e.ops[0].insert)
        },
        insert(){
            var board = {
                //jwt에서 회원 고유번호 or Token 꺼내와서 담아주기
                id : "",
                //게시글 내용
                text : this.text,
                //date는 DB에서 SYSDATE로 처리
                date : '',
                isDelete : "N",
                category : this.category
            };
            console.log(board)
        },
        getContent(e) {
            console.log(e)
        }
    },

}
</script>

<style scoped>
.write-div {
    color: #fff;
    height: 200px;
}
#write-btn button {
    color: #fff;
    background-color: coral;
    border-radius: 5px;
}
#write-btn {
    padding-top: 16px;
    color: #fff;
    display: flex;
    justify-content: right;
    margin-bottom: 20px;
}



</style>