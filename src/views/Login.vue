<template>
  <!-- <div class="container">
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
  </div>-->
  <!--div class="col-12 col-md-6 mt-2 mt-md-0">
          <router-link :to="{name: 'ResetPassword'}" class="btn custom-2 w-100">
            ลืมรหัสผ่าน
          </router-link>
  </div-->
  <!-- <small class="mt-3 text-danger" v-show="errorMsg">{{ errorMsg }}</small>
      </div>
    </div>
  </div>-->
  <div>
    <div class="box">
      <div class="logo-container">
        <img id="logo" src="../assets/logo/logo.png">
      </div>
      <form>
        <div class="my-input-control">
          <input autocomplete="email" v-model="email" class="thai" type="text" placeholder="E-Mail">
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </div>
        <div class="my-input-control">
          <input autocomplete="password" v-model="password" type="password" placeholder="Password">
          <i class="fas fa-lock" aria-hidden="true"></i>
        </div>
      </form>
      <small class="alert-text thai" v-show="errorMsg">{{ errorMsg }}</small>
      <div class="logo-container">
        <div class="button btn-primary thai" id="login" @click="login" type="filled">เข้าสู่ระบบ</div>
      </div>
      <div class="mt-3 d-flex justify-content-between">
        <small class="thai">
          <router-link to="/register">สมัครสมาชิก</router-link>
        </small>
        <small class="thai">
          <router-link :to="{name: 'ResetPassword'}" >
            ลืมรหัสผ่าน?
          </router-link>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
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
    // firebase.auth().signOut()
  },
  methods: {
    ...mapActions(['setUser']),
    login () {
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(this.email, this.password)
      //   .then(
      //     user => {
      //       if (user.user.emailVerified) {
      //         firebase
      //           .firestore()
      //           .collection('managers')
      //           .doc(user.user.uid)
      //           .get()
      //           .then(data => {
      //             user['information'] = data.data()
      //             this.setUser(user)
      //             this.$router.replace('dashboard')
      //           })
      //       } else {
      //         firebase.auth().signOut()
      //         this.$router.replace('verify')
      //       }
      //     },
      //     err => {
      //       this.errorMsg = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
      //       console.log(err)
      //     }
      //   )
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
  padding: 5%;
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

#login {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
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
</style>
