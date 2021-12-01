<template>
<div>
    <div class="router-wrapper">
        <div class="board" v-for="(a,i) in list" :key="i">
            <div class="name-div">
                <div>
                    <div>{{a.name}}</div>
                    <div>{{a.date}}</div>
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
                    {{a.content}}
                </div>
            </div>

            <BoardComment/>
        </div>
    </div>
</div>
</template>

<script>
import boardList from '../../../../assets/BoardList.json';
import BoardComment from '@/components/component/noAccess/Community/BoardComment.vue'


export default {
    name : 'Free',

    data(){
        return {
            list : boardList,
        }
    },
    mounted() {
        // this.getJson()
    },
    methods: {

        // getJson(){
        //     this.axios.get('').then(()=>{
        //         // this.list = a.data
        //     alert('hi')
        //     })
        // }

    },
    components : {
        BoardComment,
    },
    actions : {

    }

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

</style>