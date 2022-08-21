import axios from "axios";

export default {
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers({commit}) {
      axios({
        url: `https://8bit.comrades.dev/api/info`,
        // url: `http://academy/api/info`,
        method: "GET"
      }).then((response) => {
        commit('updateUsers', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    updateUsers({commit}, users) {
      axios({
        url: `https://8bit.comrades.dev/api/info/update`,
        // url: `http://academy/api/info/update`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
          id: 1,
          users: users
        }
      }).then((resp) => {
        commit('updateUsers', resp.data.users)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
