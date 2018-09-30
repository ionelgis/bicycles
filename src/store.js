import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedInUser: undefined,
    products: []
  },
  mutations: {
    setLoggedInUser(state, payload) {
      state.loggedInUser = payload;
    },
    logOutUser(state) {
      state.loggedInUser = undefined;
    },
    addDefaultProducts(state, payload) {
      payload.forEach(product => {
        state.products.push(product);
      });
    },
    addProduct(state, payload) {
      state.products.push(payload)
    }

  },
  getters: {
    isLoggedIn: state => state.loggedInUser !== undefined,
    getLoggedInUser: state => state.loggedInUser,
    products: state => state.products
  }
})
