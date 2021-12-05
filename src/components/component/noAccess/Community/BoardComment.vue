<template>
  <div class="comment-input-div">
    <div class="comment-div">
      <button @click="firstComments" id="comment-btn">댓글 10개</button>
    </div>
    <div>
      <input class="comment-input" type="text" placeholder="댓글을 입력하세요">
    </div>
    <div>
      <ul>
        <li class="comment-li" v-for="(item, index) in commentList" :key="index">
          <div class="content-wrapper">
            <div class="info-wrapper">
              <span class="name">{{item.name}}</span>            
              <span class="date">{{item.date}}</span>            
            </div>
            <span class="content-detail">
              {{item.content}}
            </span>
          </div>
          <div>
            <i @click="clicked" v-if="isClick == false" class="fas fa-ellipsis-h"></i>  
            <div class="box" v-if="isClick==true">
              <i class="fas fa-edit"></i>
              <i class="far fa-trash-alt"></i>
              <i @click="clicked2" class="fas fa-long-arrow-alt-left"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {{board}}
  {{ numberOfComments }}
  {{ moreComments }}
  안녕{{ this.$store.state.community.name }}
</template>
<!--(0,5) (5,5) (10,5) ... -->
<script>
import boardList from '../../../../assets/BoardComment.json';

export default {
  name: 'BoardComment',
  data() {
    return {
      isOpen : false,
      commentList : boardList,
      isClick: false,
      //해당 게시글의 총 댓글 수
      numberOfComments : this.board.댓글.length,
      //보여지는 댓글의 수
      commentsOnView : 0,
      moreComments : this.board.댓글.length === 0 ? false : true,
    }
  },
  props : {
    board : Object,
  },
  components : {
  },
  methods: {
    clicked() {
      this.isClick = true;
    },

    clicked2() {
      this.isClick = false;
    },
    getMoreComments(){

    },

    firstComments(){
      this.isOpen = !this.isOpen
      if(this.board.댓글.length !== 0){
        return
      }
      this.getComments()
    },

    getComments() {
      //{params : {idx : this.board.idx, number : this.commentsOnView}}
      this.axios.get('/BoardComment.json').then(e => {
        console.log(e)
        // this.board.댓글.push(e.data)
      })
    }
  },
}
</script>

<style>
.comment-input {
    border-radius: 10px;
    background-color: #414556;
    height: 20px;
    width: 1100px;
    color: #FFFFFF;
}

.comment-input-div {
  padding-right: 20px;
  padding-left: 20px;
}

.name-span {
  margin-right: 10px;
}

.comment-li {
  margin-top: 20px;
  display: flex;
  width: fit-content;
  align-items: center;
}

.content-wrapper {
  background-color: #414556;
  padding: 10px;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 5px;
}

.info-wrapper {
  margin-bottom: 5px;
}

.info-wrapper .date {
  font-size: 10px;
  margin-left: 10px;
}

.content-detail {
  margin-left: 10px;
}

.box {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap:8px;
}

i {
  cursor: pointer;
}

.comment-div {
    display: flex;
    justify-content: right;
    padding-right: 20px;
    padding-bottom: 20px;
}
#comment-btn {
  color: black;
}
</style>