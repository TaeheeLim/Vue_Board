<template>
<div @scroll="getArticle" class="router-wrapper">
    <div class="router-wrapper2">
        <div class="board" v-for="(item, index) in this.boardList" :key="index">
            <div class="name-div">
                
                <div>
                    <div>{{item.name}}</div>
                    <div>{{item.date}}</div>
                </div>
                
                <div class="icon-container" v-if="item.수정했니 === false">
                    <div class="icon-div">
                        <i @click="this.changeBoardIsModify(item); this.changeIsUpdate(item); update(item)" class="fas fa-edit"></i>
                    </div>
                    <div class="icon-div">
                        <i @click="deleteBoard(item)" class="far fa-trash-alt"></i>
                    </div>
                    <!-- 밑의 div에다가 update axios를 하는 메소드 이름을 @click에다가 추가-->
                </div>
                    <div id="finish-div" v-if="item.수정했니 === true"
                                        @click="this.changeIsUpdate(item); this.changeBoardIsModify(item)">Finish
                    </div>
            </div>
            <div class="content-div" v-if="item.isModify == true">
                {{ item.content }}
            </div>
            <div class="content-div" v-if="item.isModify == false">
                <editor @exportContent="getContent" class="content-div"/>
            </div>
            <button @click="getCommentList(item)" class="comment-btn">댓글 {{ item.댓글수 }}개</button>
                <div>
                    <input class="comment-input" type="text" placeholder="댓글을 입력하세요">
                    <button class="comment-btn">등록</button>
                </div>
            <BoardComment :board="item"/>
        </div>
    </div>
</div>
</template>

<script>
import BoardComment from '@/components/component/noAccess/Community/BoardComment.vue'
import {  mapActions, mapMutations, mapState } from 'vuex'
import editor from '../../global/editor.vue'

export default {
    name : 'Free',

    data(){
        return {
            updateContent : '',
            axiosState : false,
            //총 게시글 수
            numberOfArticle : 0,
            //보여지는 게시글 수
            articlesOnView : 0,
            isUpdate : false
        }
    },
    computed : {
        ...mapState({
            boardList : state=>state.community.boardList
        })
    },

    methods: {
        ...mapActions({
            getBoardList : 'community/getBoardList',
            getBoardNum : 'community/getBoardNum',
            getMoreList : 'community/getMoreList',
            getComments : 'community/getComments'
        }),
        ...mapMutations({
            changeIsUpdate : 'community/changeIsUpdate',
            changeBoardIsModify : 'community/changeBoardIsModify'
        }),
        
        getArticle(e){  
            // if(this.articlesOnView === this.numberOfArticle) {
            //     return
            // }

            const fullSroll = e.target.scrollHeight
            const nowScroll = e.target.scrollTop

            if((fullSroll - nowScroll) < (fullSroll / 1.5) && !this.axiosState) {
                console.log(fullSroll)
                console.log(nowScroll)

                //원래는 이 부분에서 현재보여지는 게시글의 개수인 articlesOnView 같이 넘김
                //Controller에서 보여지는 개시글의 개수를 받아서 jpa문법으로 페이징처리를 위함
                //params : {articleNum : this.articleOnView}
                this.getMoreList()
            }
        },
        //게시판 삭제
        deleteBoard(item){
            this.axios
                .delete('', null, {params : {
                                    board : item,
                                    token : sessionStorage.getItem('token')}})
                .then(e =>{
                    console.log(e)
            })
        },
        //게시판 수정
        updateBoard(item){
            this.axios
                .put('',null, {params : {board : item,
                                content : this.updateContent,
                                token : sessionStorage.getItem('token')}})
                .then(e => {
                    console.log(e);
            });
        },
        toUpdate(){

        },
        update(item){
            console.log(item)
        },
        getCommentList(item) {
            if(item.댓글수 <= 0) {
                return
            }
            this.getComments(item)
        }
    },
    mounted() {
        //0 넘겨주고
        this.getBoardList()
        // this.axios.get('/BoardList.json').then(e => {
        //     for(let item of e.data){
        //         this.boardList.push(item);
        //     }
        //     this.articlesOnView = this.boardList.length;
        // });
        
        this.getBoardNum()
        // this.axios.get('/articleNum.json').then( e=> {
        //     this.numberOfArticle = e.data.articleNum;
        // });
    },
    components : {
        BoardComment,
        editor,
    },
}
</script>

<style scoped>
/* .router-wrapper {
    width: 60vw;
    height: 80%;
    background-color: #2C2F3B;
    margin-bottom: 20px;
    padding: 15px 30px;
} */

/* .board {
    width: 60vw;
    height: 80%;
    background-color: #2C2F3B;
    margin-bottom: 20px;
} */

.board {
    width: 60vw;
    height: 80%;
    background-color: #2C2F3B;
    margin-bottom: 20px;
    color:white;
    }
.name-div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
.icon-div {
    cursor: pointer;
}

.icon-container {
    display: flex;
    gap: 18px;

}

.content-div {
    padding-left : 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 51px;
    height: 300px;
    color: white;
}
textarea {
        font-size: 15px;
        color: #000;
        width: 60vw;
        display: block;
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        resize: none;
        height: auto;
        background-color: #2C2F3B;
}

.router-wrapper {
    overflow: scroll;
    height: calc(100vh - 100px);
   -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.router-wrapper::-webkit-scrollbar {
    display: none;
}
#finish-div {
    color: white;
    font-weight: bold;
    cursor : pointer;
}
.comment-btn {
    color : black;
}
.comment-input {
    border-radius: 10px;
    background-color: #414556;
    height: 20px;
    width: 1100px;
    color: #FFFFFF;
    margin-left : 80px;
    padding-left : 14px;
}
</style>