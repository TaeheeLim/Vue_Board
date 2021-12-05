//import { createStore } from 'vuex'
import axios from 'axios'

const community = {
  namespaced: true,
  state: {
    boardList : [],
    numberOfArticle : 0,
  },
  mutations: {
    pushToBoardList(state, payload){
      state.boardList.push(payload)
    },
    setNumberOfArticle(state, payload){
      state.numberOfArticle = payload
    },

  },
  actions: {
    getBoardList(context){
      console.log("보드리스트로 드러왓니");
      axios.get('/boardList.json')
                .then(e => {
                  for(let item of e.data){
                    context.commit('pushToBoardList', item)
                  }
                })// 화이팅~~!!
                .catch(err => {
                  console.log(err)
                })
    },
    getBoardNum(context){
      axios.get('/articleNum.json')
                .then(e => {
                context.commit('setNumberOfArticle', e.data.articleNum)
                })
    }
  }
}

export default community