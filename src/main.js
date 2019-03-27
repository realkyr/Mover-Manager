import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from '@/config/firebase'
import Vuesax from 'vuesax'
import VueScrollTo from 'vue-scrollto'

import 'vuesax/dist/vuesax.css' // Vuesax styles
Vue.use(VueScrollTo)
Vue.use(Vuesax)

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
