export default {
  state: {
    name: localStorage.getItem('adminName')
  },
  mutations: {
    changeName (state, newName) {
      state.name = newName
      localStorage.setItem('adminName', newName)
    }
  },
  getters: {
    getName(state) {
      return state.name
    }
  }
}
