import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './profile'
import courses from "@/store/courses"
import faqs from "@/store/faqs";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  modules: {
    auth, info, courses, faqs
  }
})
