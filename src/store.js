import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: undefined,
    user: undefined,
    address: {
      name: ''
    },
    students: {},
    drivers: {},
    buses: {}
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    CLEAR_USER (state) {
      state.user = undefined
      state.uid = undefined
      state.drivers = {}
      state.students = {}
      state.address = { name: '' }
      state.buses = {}
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
    SET_STUDENTS (state, payload) {
      state.students = payload
    },
    SET_PATH_STUDENT (state, payload) {
      state.students[payload.sid].pic = payload.data
      state.students[payload.sid].pic_link = ''
    },
    SET_DRIVERS (state, payload) {
      state.drivers = payload
    },
    SET_PATH_DRIVER (state, payload) {
      state.drivers[payload.duid].pic = payload.data
      state.drivers[payload.duid].pic_link = ''
    },
    SET_BUSES (state, payload) {
      state.buses = payload
    },
    UPDATE_BUS (state, payload) {
      state.buses[payload.bid].driver = payload.data.driver
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
    setStudents: ({ commit }, data) => {
      commit('SET_STUDENTS', data)
    },
    setPathStudent: ({ commit }, data) => {
      commit('SET_PATH_STUDENT', data)
    },
    setDrivers: ({ commit }, data) => {
      commit('SET_DRIVERS', data)
    },
    setPathDriver: ({ commit }, image) => {
      commit('SET_PATH_DRIVER', image)
    },
    setTmpUrlDriver: ({ commit }, data) => {
      commit('SET_TMPPIC_DRIVER', data)
    },
    setBuses: ({ commit }, data) => {
      commit('SET_BUSES', data)
    },
    updateDriverBus: ({ commit }, data) => {
      commit('UPDATE_BUS', data)
    }
  },
  getters: {
    getUser: state => state.user,
    getInformation: state => state.info
  }
})
