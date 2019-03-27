<template>
  <div class="container">
    <div class="container-box">
      <h2 class="text-center thai">เข้าสู่ระบบ</h2>
      <div @keyup.enter="login" class="form">
        <div class="form-group">
          <label>Email address</label>
          <input v-model="email" type="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="col-12 col-md-6">
          <button @click="login" class="thai">
            เข้าสู่ระบบ
          </button>
        </div>
        <!--div class="col-12 col-md-6 mt-2 mt-md-0">
          <router-link :to="{name: 'ResetPassword'}" class="btn custom-2 w-100">
            ลืมรหัสผ่าน
          </router-link>
        </div-->
        <small class="mt-3 text-danger" v-show="errorMsg">{{ errorMsg }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'Login',
  metaInfo: {
    title: 'Login | Mover'
  },
  data () {
    return {
      email: '',
      password: '',
      errorMsg: null
    }
  },
  created: function () {
    firebase.auth().signOut()
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (user.user.emailVerified) {
            firebase.firestore().collection('managers').doc(user.user.uid).get().then((data) => {
              user['information'] = data.data()
              this.setUser(user)
              this.$router.replace('dashboard')
            })
          } else {
            firebase.auth().signOut()
            this.$router.replace('verify')
          }
        },
        (err) => { this.errorMsg = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' }
      )
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  min-height: 100vh;
}

.container-box {
  position: relative;
  display: block;
  margin: 0 auto;
  top: calc(50vh - 90vh / 2);
  width: calc(100vw * 0.4);
  height: 90vh;
  text-align: center;
  background: #FFE9EF;
  border-radius: 2.5%;
}

#login {
  text-align: center;
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
</style>
