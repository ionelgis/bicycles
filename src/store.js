import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedInUser: undefined
  },
  mutations: {
    setLoggedInUser(state, payload) {
      state.loggedInUser = payload;
    },
    logOutUser(state) {
      state.loggedInUser = undefined;
    }

  },
  actions: {

  },
  getters: {
    isLoggedIn: state => state.loggedInUser !== undefined,
    getLoggedInUser: state => state.loggedInUser
  }
})
