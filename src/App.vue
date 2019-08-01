<template>
  <div id="app">
    <router-view v-if="isShow"/>
    <Loading v-else/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { mapActions } from 'vuex'
import Loading from './components/Dashboard/Loading'
export default {
  name: 'App',
  components: {
    Loading
  },
  mounted () {
    if (this.$route.path.includes('/dashboard')) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // ดึงข้อมูล user, uid มาใส่ใน vuex
          firebase.firestore().collection('managers').doc(user.uid).get()
            .then(data => {
              this.setUid(user.uid)
              this.setUser(data.data())
              this.isShow = true
            })
        } else {
          // ไปหน้า login
          this.isShow = true
          this.$router.replace({ path: '/login' })
        }
      })
    } else {
      this.isShow = true
    }
  },
  methods: {
    ...mapActions(['setUid', 'setUser'])
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Prompt');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.thai {
  font-family: 'Prompt', sans-serif;
}
</style>
