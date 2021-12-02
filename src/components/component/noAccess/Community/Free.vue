<template>
<div @scroll="getArticle" class="router-wrapper">
    <div class="router-wrapper2">
        <div class="board" v-for="(item, index) in boardList" :key="index">
            <div class="name-div">
                <div>
                    <div>{{item.name}}</div>
                    <div>{{item.date}}</div>
                </div>
                <div class="icon-container">
                    <div class="icon-div">
                        <i class="fas fa-edit"></i>
                    </div>
                    <div class="icon-div">
                        <i class="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
            <div class="content-div">
                <div>
                    {{item.content}}
                </div>
            </div>
            <BoardComment :board="item"/>
        </div>
    </div>
</div>
</template>

<script>
import BoardComment from '@/components/component/noAccess/Community/BoardComment.vue'

export default {
    name : 'Free',

    data(){
        return {
            axiosState : false,
            boardList : [],
            numberOfArticle : 0,
            articlesOnView : 0,
        }
    },
    methods: {      
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
        }
    },
    mounted() {
        //0 넘겨주고
        this.axios.get('/BoardList.json').then(e => {
            for(let item of e.data){
                this.boardList.push(item);
            }
            this.articlesOnView = this.boardList.length;
        });
        
        this.axios.get('/articleNum.json').then( e=> {
            this.numberOfArticle = e.data.articleNum;
        });
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
</style>