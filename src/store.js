import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined,
    info: undefined
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_INFO (state, payload) {
      state.info = payload
    },
    CLEAR_USER (state) {
      state.user = undefined
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      /*
      firebase.firestore().collection('managers').doc(user.uid).get().then((data) => {
        user.information = data.data()
        commit('SET_USER', user)
        commit('SET_INFO', user.information)
      }) */
      commit('SET_USER', user)
    },
    clearUser: ({ commit }, user) => {
      commit('CLEAR_USER')
    }
  },
  getters: {
    getUser: state => state.user,
    getInformation: state => state.info
  }
})
