<template>
<div class="head-container">
  <div class="container">
    <div class="real-container"> 
      <div class="left-container">
        <router-link @click="step=0" class ="board-direction" to="/community/free">자유게시판</router-link>
        <router-link @click="step=0" class ="board-direction" to="/community/qna">문의 게시판</router-link>
        <button @click="step=1" class="board-direction">글 작성</button>
      </div>
      <div class="input-container">
        <input type="text" class="search-input" @keyup.enter="search" v-model="key">
        <img src="@/assets/돋보기2.png">
      </div>
    </div>
    <div class="body-router">
      <Write :step="step" />
      <div class="router-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import Write from '@/components/component/noAccess/Community/BoardWrite.vue';

export default {
  data(){
    return {
      key: "",
      step : 0,
    }
  },
  components: {
    Write,
  },
  methods: {
    search() {
      console.log(this.key)
    }
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

input {
  color: #000;
}

.head-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 22px;
  margin-bottom: 10px;
  width: 100vm;
  height: calc(100vh - 70px);
}

.real-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.board-direction {
  background-color: coral;
  border-radius: 10px;
  padding: 2px 16px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
}

.board-direction:last-child {
  margin: 0;
}

/* .write-btn {
  background-color: coral;
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
} */
.search-input {
  border-radius: 10px;
  color : white;
  background-color: #414556;
  padding: 0 5px;
  position: relative;
  height: 20px;
  width : 160px;
}


/* .board {
  width: 60vw;
  height: 80%;
  background-color: #2C2F3B;
  border: 1px solid red;
} */

.input-container {
  position: relative;
}

img {
  height : 20px;
  width : 20px;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  right: 5px;
}

.write-div {
  width: 60vw;
  height: 80%;
  background-color: #2C2F3B;
  margin-bottom: 20px;
}

.body-router {
  overflow: scroll;
  height: calc(100vh - 100px);
   -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.body-router::-webkit-scrollbar {
    display: none;
}
</style>