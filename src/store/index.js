import Vue from 'vue'
import Vuex from 'vuex'
import authAPI from '../apis/authorize'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    isAuthenticated: false
  },
  getters: {
    getCurrentUser: state => state.currentUser,
    getIsAuth: state => state.isAuthenticated
  },
  actions: {
    async setCurrentUser({ commit }) {
      try {
        const { data, statusText } = await authAPI.getCurrentUser()
        if(statusText !== 'OK') {
          throw new Error(data.message)
        }
        // console.log(data)
        commit('getCurrentUser', data.user)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
  mutations: {
    getCurrentUser(state, user) {
      state.currentUser = {
        ...state.currentUser,
        ...user
      }
      state.isAuthenticated = true
    },
    logoutUser(state) {
      state.currentUser = {},
      state.isAuthenticated = false
    }
  },
  modules: {
  }
})
