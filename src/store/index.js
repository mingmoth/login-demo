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
        commit('getCurrentUser', data.user)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    setIsAuth({ commit }, payload) {
      commit('getIsAuth', payload)
    },
  },
  mutations: {
    getCurrentUser(state, user) {
      state.currentUser = {
        ...state.currentUser,
        ...user
      }
    },
    getIsAuth(state, payload) {
      state.isAuthenticated = payload
    },
  },
  modules: {
  }
})
