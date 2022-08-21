import axios from "axios";

export default {
  state: {
    faqs: []
  },
  getters: {
    getFAQ(state) {
      return state.faqs
    }
  },
  mutations: {
    updateFAQ(state, faqs) {
      state.faqs = faqs
    },
    getFAQ(state, faq) {
      return state.faqs.find(item => item.id === faq.id)
    },
    createFAQMutation(state, faq) {
      state.faqs.unshift(faq)
    },
    deleteFAQMutation(state, id) {
      state.faqs = state.faqs.filter(item => item.id !== id)
    },
    editFAQMutation(state, faq) {
      state.faqs.find(item => item.id === faq.id)
    }
  },
  actions: {
    createFAQ(commit, faq) {
      axios({
        url: 'https://8bit.comrades.dev/api/faq/insert',
        data: {
          title: faq.title,
          description: faq.description,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: 'POST'
      }).then((resp) => {
        commit('createFAQMutation', resp.data.faq)
      }).catch((err) => {
        console.log(err)
      })
    },
    getFAQ({commit}) {
      axios({
        url: 'https://8bit.comrades.dev/api/faq',
        method: "GET"
      }).then((response) => {
        commit('updateFAQ', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteFAQ({commit}, id) {
      axios({
        url: `https://8bit.comrades.dev/api/faq/delete/${id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() => {
        commit('deleteFAQMutation', id)
      }).catch(err => {
        console.log(err)
      })
    },
    editFAQ({commit}, faq) {
      axios({
        url: `https://8bit.comrades.dev/api/faq/update`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
          id: faq.id,
          title: faq.title,
          description: faq.description,
        }
      }).then((resp) => {
        commit('editFAQMutation', resp.data.faq)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
