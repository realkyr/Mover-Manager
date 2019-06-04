<template>
  <div class="box">
    <div class="logo-container">
      <img id="logo" src="../assets/logo/logo.png">
    </div>
    <hr />
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-6 input-group">
        <div class="input-control">
          <div class="my-input-control">
            <input v-model="email" class="thai" type="text" placeholder="E-Mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <small v-show="errEmail" style="color:red;" class="alert-text thai"
          > {{ errEmail }} </small>
          <div class="my-input-control">
            <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai"
          > {{ errName }} </small>
          <div class="my-input-control">
            <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai"
          > {{ errName }} </small>
          <div class="my-input-control">
            <input v-model="phone" class="thai" type="tel" placeholder="เบอร์โทรศัพท์" maxlength="10">
            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
          </div>
          <small v-show="errPhone" style="color:red;" class="alert-text thai"
          > {{ errPhone }} </small>
          <div class="my-input-control">
          <input v-model="password" class="thai" type="password" placeholder="รหัสผ่าน">
          <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errPass" style="color:red;" class="alert-text thai"
          > {{ errPass }} </small>
          <div class="my-input-control">
            <input v-model="conPassword" class="thai" type="password" placeholder="ยืนยันรหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errConPass" style="color:red;" class="alert-text thai"
          > {{ errConPass }} </small>
        </div>
      </div>
      <div class="vl"></div>
        <div class="col input-school">
          <Map />
        </div>
    </div>
    <div class="btn-group">
      <button type="button" id="regiter" class="btn thai" @click="register">สมัครสมาชิก</button>
      <button type="button" id="back" class="btn thai" @click="cancel">ยกเลิก</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Map from '../components/Register/Map'
export default {
  components: {
    Map
  },
  name: 'Register',
  metaInfo: {
    title: 'Register | Mover'
  },
  data () {
    return {
      errEmail: '',
      errPass: '',
      errConPass: '',
      errName: '',
      errPhone: '',
      email: '',
      password: '',
      conPassword: '',
      fname: '',
      lname: '',
      phone: ''
    }
  },
  methods: {
    register () {
      if (this.conPassword !== this.password) {
        this.errConPass = 'โปรดกรอกรหัสให้ตรงกัน'
      } else {
        this.errConPass = ''
      }
      if (this.password === '' || this.conPassword === '') {
        this.errPass = 'โปรดกรอกรหัสผ่าน'
      } else {
        this.errPass = ''
      }
      if (this.email === '') {
        this.errEmail = 'โปรดกรอกอีเมล'
      } else {
        this.errEmail = ''
      }
      if (this.phone === '') {
        this.errPhone = 'โปรดกรอกเบอร์โทรศัพท์'
      } else {
        this.errPhone = ''
      }
      if (this.fname === '' || this.lname === '') {
        this.errName = 'โปรดกรอกชื่อ-นามสกุลให้ครบถ้วน'
      } else {
        this.errName = ''
      }
      if (this.validate()) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message
            if (errorCode === 'auth/email-already-in-use') {
              this.errEmail = 'อีเมลนี้ถูกใช้ไปแล้ว'
            } else {
              console.log(errorMessage)
            }
          })
      }
    },
    validate () {
      if (this.errEmail === '' && this.errPass === '' && this.errConPass === '' &&
       this.errName === '' && this.errPhone === '') {
        return true
      } else {
        return false
      }
    },
    cancel () {
      this.$router.replace('Login')
    }
  }
}
</script>

<style scoped>
.box {
  background: white;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 70%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

#logo {
  width: 50px;
  align-self: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
  width: 100%;
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

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

.input-control {
  position: relative;
  margin: 15px 0 15px 0;
  width: 100%;
  padding: 0 4rem 0 4rem;
}

.input-group {
  justify-content: center;
  align-items: center;
}

#register {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 10px 0;
}

#register:hover {
  box-shadow: none;
}

#back {
  color: black !important;
  background: white !important;
  /* background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important; */
  border-radius: 18px;
  width: 100%;
}

#back:hover {
  background: #d3d3d3 !important;
}

.btn-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  margin: 1rem auto 0 auto;
}

.btn {
  margin: 10px 0 0 0;
  color: white;
  border-radius: 18px !important;
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
}

.vl {
  border-left: 1px solid #d3d3d3;
}

.input-school {
  padding: 0 3rem 0 3rem;
}

@media screen and (max-width: 992px) {
  .input-control {
    padding: 0 10px 0 10px;
  }
  .input-school {
    padding: 25px 25px 25px 25px;
  }
}
@media screen and (max-width: 576px) {
  .box {
    transform: translate(-50%, -40%);
  }
  .vl {
    display: none;
  }
  .btn-group {
    flex-direction: row;
  }
  #back {
    margin-left: 15px;
  }
}

</style>
