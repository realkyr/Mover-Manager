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
      this.onAuth = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          let managerRef = firebase.firestore().collection('managers').doc(user.uid)
          // ดึงข้อมูล user, uid มาใส่ใน vuex
          managerRef.get()
            .then(data => {
              this.setUid(user.uid)
              this.setUser(data.data())
            }).then(() => {
              managerRef.collection('cars').get()
                .then(snapshot => {
                  let tmpBuses = {}
                  snapshot.forEach(bus => {
                    tmpBuses[bus.id] = bus.data()
                  })
                  this.setBuses(tmpBuses)
                })
              managerRef.collection('drivers').orderBy('fname').get()
                .then(snapshot => {
                  let tmpDrivers = {}
                  snapshot.forEach(driver => {
                    tmpDrivers[driver.id] = driver.data()
                  })
                  this.setDrivers(tmpDrivers)
                })
              managerRef.collection('students').orderBy('fname').get()
                .then(snapshot => {
                  let tmpStudents = {}
                  snapshot.forEach(student => {
                    tmpStudents[student.id] = student.data()
                  })
                  this.setStudents(tmpStudents)
                })
              managerRef.collection('student-groups').get()
                .then(snapshot => {
                  let tmpGroups = {}
                  snapshot.forEach(group => {
                    tmpGroups[group.id] = group.data()
                  })
                  this.setGroups(tmpGroups)
                }).then(() => {
                  if (this.$route.path.includes('/dashboard')) {
                    this.isShow = true
                  } else {
                    this.$router.replace('/dashboard')
                    this.isShow = true
                  }
                })
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
    ...mapActions(['setUser', 'setUid', 'setDrivers', 'setStudents', 'setBuses', 'setGroups'])
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
