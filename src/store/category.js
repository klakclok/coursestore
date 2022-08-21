import axios from "axios";

export default {
  state: {
    categories: []
  },
  getters: {
    getCategories(state) {
      return state.categories
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories
    },
    createCategoryMutation(state, category) {
      state.categories.push(category)
    },
    deleteCategoryMutation(state, id) {
      state.categories = state.categories.filter(item => item.id !== id)
    },
    editCategoryMutation(state, category) {
      state.categories.find(item => item.id === category.id)
    }
  },
  actions: {
    createCategory(commit, category) {
      axios({
        // url: 'https://8bit.comrades.dev/api/category/insert',
        url: 'http://academy/api/category/insert',
        data: {
          title: category.title,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: 'POST'
      }).then((resp) => {
        commit('createCategoryMutation', resp.data.category)
      }).catch((err) => {
        console.log(err)
      })
    },
    getCategories({commit}) {
      axios({
        url: 'https://8bit.comrades.dev/api/categories',
        method: "GET"
      }).then((response) => {
        commit('updateCategories', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteCategory({commit}, id) {
      axios({
        url: `https://8bit.comrades.dev/api/category/delete/${id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() => {
        commit('deleteCategoryMutation', id)
      }).catch(err => {
        console.log(err)
      })
    },
    editCategory({commit}, category) {
      axios({
        url: `https://8bit.comrades.dev/api/category/update`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
          id: category.id,
          title: category.title,
        }
      }).then((resp) => {
        commit('editCategoryMutation', resp.data.category)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
