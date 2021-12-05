<template>
<div @scroll="getArticle" class="router-wrapper">
    <div class="router-wrapper2">
        <div class="board" v-for="(item, index) in boardList" :key="index">
            <div class="name-div">
                
                <div>
                    <div>{{item.name}}</div>
                    <div>{{item.date}}</div>
                </div>
                
                <div class="icon-container" >
                    <div v-if="updateCheck == true" @click="Check" class="icon-div">
                        <i @click="toUpdate" class="fas fa-edit"></i>
                    </div>
                    <div v-if="updateCheck == true" class="icon-div">
                        <i @click="deleteBoard(item)" class="far fa-trash-alt"></i>
                    </div>
                    <!-- 밑의 div에다가 update axios를 하는 메소드 이름을 @click에다가 추가-->
                    <div id="finish-div" v-if="updateCheck === false"
                                        @click="finishUpdate(); Check()">Finish</div>
                </div>
            </div>
            <textarea class="content-div" @keyup="update"
                                            :value="item.content" readonly></textarea>
            <BoardComment :board="item"/>
        </div>
    </div>
</div>
</template>

<script>
import BoardComment from '@/components/component/noAccess/Community/BoardComment.vue'
import {  mapActions, mapMutations } from 'vuex'

export default {
    name : 'Free',

    data(){
        return {
            updateContent : '',
            updateCheck : true,
            axiosState : false,
            boardList : [],
            numberOfArticle : 0,
            articlesOnView : 0,
            isUpdate : false
        }
    },
    methods: {
        ...mapActions({
            getBoardList : 'community/getBoardList',
            getBoardNum : 'community/getBoardNum'
        }),

        ...mapMutations({
            pushToBoardList: 'community/pushToBoardList',
            setNumberOfArticle : 'community/setNumberOfArticle'
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

                //원래는 이 부분에서 현재보여지는 게시글의 개수인 articleOnView를 같이 넘김
                //Controller에서 보여지는 개시글의 개수를 받아서 jpa문법으로 페이징처리를 위함
                //params : {articleNum : this.articleOnView}
                this.axios.get('/BoardList.json').then(e => {
                    for(let item of e.data){
                        this.boardList.push(item);
                    }
                    this.articleOnView = this.boardList.length
                    console.log(this.boardList.length)
                    console.log(this.boardList)
                    // this.articlesOnView += e.dtaa.length
                });
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
            console.log('들어오니')
            document.querySelector('textarea').removeAttribute('readonly')
            this.isUpdate = true;
        },
        finishUpdate(){
            console.log('finish로 들어오니')
            document.querySelector('textarea').setAttribute('readonly', true)
            this.isUpdate = false;
        },
        update(e){
            if(!this.isUpdate){
                return
            }
            console.log(e.target.value);
            this.updateContent = e.target.value
        },
        Check(){
            this.updateCheck = !this.updateCheck;
            console.log("----" + this.updateCheck)
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
</style>