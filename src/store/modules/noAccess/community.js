const community = {
  namespaced: true,
  state: {
    name: '태희'
  },
  mutations: {
    hello(state) {
      alert(state.name + '님 안녕하세요!')
    }
  },
  actions: {
    
  }
}

export default community