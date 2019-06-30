import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: undefined,
    user: undefined,
    address: {
      name: ''
    },
    studentNames: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    CLEAR_USER (state) {
      state.user = undefined
      state.uid = undefined
    },
    SET_ADDRESS (state, payload) {
      if ('name' in payload) {
        state.address = {
          name: payload.name,
          geometry: {
            location: {
              lat: payload.geometry.location.lat(),
              lng: payload.geometry.location.lng()
            }
          }
        }
      } else {
        state.address = {
          name: payload.results[0].address_components[1].long_name,
          geometry: payload.results[0].geometry
        }
      }
    },
    SET_UID (state, payload) {
      state.uid = payload
    },
    SET_PROFILE (state, payload) {
      state.user['profile'] = payload
    },
    SET_STUDENTNAMES (state, payload) {
      state.studentNames.push(payload)
    }
  },
  actions: {
    setAddress: ({ commit }, address) => {
      commit('SET_ADDRESS', address)
    },
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
    },
    setUid: ({ commit }, uid) => {
      commit('SET_UID', uid)
    },
    setProfile: ({ commit }, image) => {
      commit('SET_PROFILE', image)
    },
    setStudentNames: ({ commit }, name) => {
      commit('SET_STUDENTNAMES', name)
    }
  },
  getters: {
    getUser: state => state.user,
    getInformation: state => state.info
  }
})
