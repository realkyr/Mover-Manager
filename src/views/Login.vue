<template>
  <div>
    <div v-if="isShow" class="box">
      <div class="logo-container">
        <img id="logo" src="../assets/logo/logo.png" />
      </div>
      <form>
        <div class="my-input-control">
          <input
            autocomplete="email"
            v-model="email"
            class="thai"
            type="text"
            placeholder="E-Mail"
            v-on:keyup.enter="login"
            @input="clearErr"
          />
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </div>
        <div class="my-input-control">
          <input
            autocomplete="password"
            v-model="password"
            type="password"
            placeholder="Password"
            v-on:keyup.enter="login"
            @input="clearErr"
          />
          <i class="fas fa-lock" aria-hidden="true"></i>
        </div>
      </form>
      <small class="alert-text thai" v-show="errorMsg">{{ errorMsg }}</small>
      <div class="logo-container">
        <button type="button" id="login" class="btn thai text-light" @click="login">เข้าสู่ระบบ</button>
      </div>
      <div class="mt-3 d-flex justify-content-center">
        <small class="thai">
          <router-link to="/register">สมัครสมาชิก</router-link>
        </small>
        <!-- <small class="thai">
          <router-link :to="{name: 'ResetPassword'}">ลืมรหัสผ่าน?</router-link>
        </small> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login | Mover'
  },
  mounted () {
    this.onAuth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (firebase.auth().currentUser.emailVerified) {
          let managerRef = firebase.firestore().collection('managers').doc(user.uid)
          managerRef.get()
            .then(data => {
              this.setUid(user.uid)
              this.setUser(data.data())
            }).then(() => {
              managerRef.collection('cars').orderBy('no').get()
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
                  this.$router.replace('/dashboard')
                })
            })
        } else {
          this.isShow = true
        }
      } else {
        this.isShow = true
      }
    })
  },
  data () {
    return {
      email: '',
      password: '',
      errorMsg: null,
      isShow: false
    }
  },
  methods: {
    ...mapActions(['setUser', 'setUid', 'setDrivers', 'setStudents', 'setGroups', 'setBuses']),
    login () {
      this.onAuth()
      let managerRef = firebase.firestore().collection('managers')
      if (this.email !== '' && this.password !== '') {
        this.errorMsg = ''
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            if (user.user.emailVerified) {
              this.setUid(user.user.uid)
              managerRef
                .doc(user.user.uid)
                .get()
                .then(data => {
                  this.setUser(data.data())
                }).then(() => {
                  managerRef.doc(user.user.uid).collection('cars').get()
                    .then(snapshot => {
                      let tmpBuses = {}
                      snapshot.forEach(bus => {
                        tmpBuses[bus.id] = bus.data()
                      })
                      this.setBuses(tmpBuses)
                    })
                  managerRef.doc(user.user.uid).collection('drivers').orderBy('fname').get()
                    .then(snapshot => {
                      let tmpDrivers = {}
                      snapshot.forEach(driver => {
                        tmpDrivers[driver.id] = driver.data()
                      })
                      this.setDrivers(tmpDrivers)
                    })
                  managerRef.doc(user.user.uid).collection('students').orderBy('fname').get()
                    .then(snapshot => {
                      let tmpStudents = {}
                      snapshot.forEach(student => {
                        tmpStudents[student.id] = student.data()
                      })
                      this.setStudents(tmpStudents)
                    })
                  managerRef.doc(user.user.uid).collection('student-groups').get()
                    .then(snapshot => {
                      let tmpGroups = {}
                      snapshot.forEach(group => {
                        tmpGroups[group.id] = group.data()
                      })
                      this.setGroups(tmpGroups)
                    }).then(() => {
                      this.$router.replace('/dashboard')
                    })
                })
            } else {
              this.errorMsg = 'โปรดยืนยันอีเมล'
            }
          })
          .catch(error => {
            console.log(error.code)
            let errorCode = error.code
            if (errorCode === 'auth/wrong-password') {
              this.errorMsg = 'กรอกอีเมล-รหัสผ่านให้ถูกต้อง'
            } else if (
              errorCode === 'auth/user-not-found' ||
              errorCode === 'auth/invalid-email'
            ) {
              this.errorMsg = 'อีเมลไม่ถูกต้อง'
            }
          })
      } else {
        this.errorMsg = 'โปรดกรอกอีเมล-รหัสผ่าน'
      }
    },
    clearErr () {
      this.errorMsg = ''
    }
  },
  beforeDestroy () {
    this.onAuth()
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  min-height: 100vh;
}

.container-box {
  display: block;
  margin: 0 auto;
  top: calc(50vh - 90vh / 2);
  width: calc(100vw * 0.4);
  height: 90vh;
  text-align: center;
  background: #ffe9ef;
  border-radius: 2.5%;
}

#login {
  text-align: center;
}

#login {
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 10px 0;
}

#login:hover {
  box-shadow: none;
}

.form {
  width: 80%;
  min-width: 300px;
  text-align: center;
  margin: 0 auto;
}

#footer {
  position: absolute;
  bottom: 0;
  left: 0;
}

.box {
  border-radius: 8px;
  background: white;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  display: block;
  width: 310px;
}

#logo {
  width: 50px;
  align-self: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
}

input {
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  overflow-x: hidden;
  border: 1pt solid rgb(234, 234, 234);
  border-radius: 18px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 10pt;
  -webkit-appearance: none;
}

input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}

.my-input-control {
  position: relative;
}

i {
  position: absolute;
  left: 5pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

#login {
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
  border-radius: 18px;
  width: 100%;
}

#login:hover {
  box-shadow: none;
}

.alert-text {
  color: crimson;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .box {
    transform: translate(-50%, -50%);
  }
}
</style>
