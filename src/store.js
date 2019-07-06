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
    buses: {},
    tmpPicDriver: undefined,
    urlDriver: ''
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
      state.tmpPicDriver = undefined
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
    SET_DRIVERS (state, payload) {
      state.drivers = payload
    },
    SET_PICDRIVER (state, payload) {
      state.drivers[payload.duid].pic = payload.data
    },
    SET_PICSDRIVER (state, payload) {
      state.tmpPicDriver = payload
    },
    SET_URLDRIVER (state, payload) {
      state.tmpPicDriver[payload.duid] = payload.url
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
    setDrivers: ({ commit }, data) => {
      commit('SET_DRIVERS', data)
    },
    setPicDriver: ({ commit }, image) => {
      commit('SET_PICDRIVER', image)
    },
    setPicsDriver: ({ commit }, data) => {
      commit('SET_PICSDRIVER', data)
    },
    updatePicDriver: ({ commit }, data) => {
      commit('SET_URLDRIVER', data)
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
