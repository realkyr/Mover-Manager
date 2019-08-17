<template>
  <div>
    <div class="box">
      <div class="logo-container">
        <img id="logo" src="../assets/logo/logo.png" />
      </div>
      <hr />
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 input-group">
          <div class="input-control">
            <div class="register-input-control">
              <input
                v-model="email"
                class="input-info thai"
                type="text"
                placeholder="E-Mail"
                @input="() => {this.errEmail = ''}"
              />
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <small v-show="errEmail" style="color:red;" class="alert-text thai">{{ errEmail }}</small>
            <div class="fname d-flex flex-row justify-content-center align-items-center">
              <select class="custom-select thai col-3 pr-4" v-model="prefix">
                <option value>คำนำหน้าชื่อ</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
              <div class="register-input-control col pr-0">
                <input
                  v-model="fname"
                  class="input-info thai"
                  type="text"
                  placeholder="ชื่อ"
                  @input="() => {this.errName = ''}"
                />
                <i id="fname" class="fas fa-user-circle" aria-hidden="true"></i>
              </div>
            </div>
            <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
            <div class="register-input-control">
              <input
                v-model="lname"
                class="input-info thai"
                type="text"
                placeholder="นามสกุล"
                @input="() => {this.errName = ''}"
              />
              <i class="fas fa-user-circle" aria-hidden="true"></i>
            </div>
            <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
            <div class="register-input-control">
              <input
                v-model="phone"
                class="input-info thai"
                type="tel"
                placeholder="เบอร์โทรศัพท์"
                maxlength="10"
                @input="() => {this.errPhone = ''}"
              />
              <i class="fas fa-mobile-alt" aria-hidden="true"></i>
            </div>
            <small v-show="errPhone" style="color:red;" class="alert-text thai">{{ errPhone }}</small>
            <div class="register-input-control">
              <input
                v-model="password"
                class="input-info thai"
                type="password"
                placeholder="รหัสผ่าน"
                @input="() => {this.errPass = ''}"
              />
              <i class="fas fa-lock" aria-hidden="true"></i>
            </div>
            <small v-show="errPass" style="color:red;" class="alert-text thai">{{ errPass }}</small>
            <div class="register-input-control">
              <input
                v-model="conPassword"
                class="input-info thai"
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                @input="() => {this.errConPass = ''}"
              />
              <i class="fas fa-lock" aria-hidden="true"></i>
            </div>
            <small v-show="errConPass" style="color:red;" class="alert-text thai">{{ errConPass }}</small>
            <div class="custom-control custom-checkbox mt-3">
              <input
                id="terms"
                type="checkbox"
                class="custom-control-input"
                v-model="isAccept"
                @change="setAccept"
              />
              <label
                style="font-size:12pt;"
                class="thai custom-control-label"
                :class="{ 'text-danger':isNotCheck }"
                for="terms"
              >
                ฉันยอมรับข้อตกลงการใช้งาน
                <a
                  @click="showModal"
                  href="javascript:void(0)"
                >Terms&Conditions</a>
              </label>
            </div>
          </div>
        </div>
        <div class="vl"></div>
        <div class="col input-school">
          <small v-show="errAddress" style="color:red;" class="alert-text thai">{{ errAddress }}</small>
          <Map />
        </div>
      </div>
      <div class="btn-group">
        <button type="button" id="registerBtn" class="btn thai" @click="register">สมัครสมาชิก</button>
        <button type="button" id="back" class="btn thai" @click="cancel">ยกเลิก</button>
      </div>
    </div>
    <TermsModal
      ref="modal"
      @onTerms="closeModal"
      :regisInfo="{
        fname: fname,
        lname: lname,
        prefix: prefix,
        email: email,
        phone: phone
      }"
    />
  </div>
</template>

<script>
/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'
import TermsModal from '../components/Register/Terms'

import Map from '../components/Register/Map'
export default {
  components: {
    Map,
    TermsModal
  },
  name: 'Register',
  metaInfo: {
    title: 'Register | Mover'
  },
  mounted () {
    this.$store.state.address = { name: '' }
    if ('email' in this.$route.params) {
      this.email = this.$route.params.email
      this.fname = this.$route.params.fname
      this.lname = this.$route.params.lname
      this.phone = this.$route.params.phone
      this.prefix = this.$route.params.prefix
    }
  },
  data () {
    return {
      errEmail: '',
      errPass: '',
      errConPass: '',
      errName: '',
      errPhone: '',
      errAddress: '',
      email: '',
      password: '',
      conPassword: '',
      fname: '',
      lname: '',
      phone: '',
      prefix: '',
      isAccept: false,
      isNotCheck: false
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
      let withoutSpace = this.password.replace(/ /g, '')
      if (withoutSpace.length < 8) {
        this.errPass = 'โปรดกรอกรหัสให้มากกว่า 7 ตัวอักษร'
      } else {
        this.errPass = ''
      }
      if (this.email === '' && !this.email.includes('@')) {
        this.errEmail = 'โปรดกรอกอีเมลให้ถูกต้อง'
      } else {
        this.errEmail = ''
      }
      if (this.phone.length !== 10 || !Number.isInteger(+this.phone)) {
        this.errPhone = 'โปรดกรอกเบอร์โทรศัพท์ให้ถูกต้อง'
      } else {
        this.errPhone = ''
      }
      if (this.fname === '' || this.lname === '') {
        this.errName = 'โปรดกรอกชื่อ-นามสกุลให้ครบถ้วน'
      } else {
        this.errName = ''
      }
      if (!('geometry' in this.$store.state.address)) {
        this.errAddress = 'โปรดกรอกชื่อโรงเรียน'
      } else {
        this.errAddress = ''
      }
      if (this.isAccept === false) {
        this.isNotCheck = true
      } else {
        this.isNotCheck = false
      }
      if (this.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            user.user.sendEmailVerification()
            firebase
              .firestore()
              .collection('managers')
              .doc(user.user.uid)
              .set({
                email: this.email,
                fname: this.fname,
                lname: this.lname,
                prefix: this.prefix,
                phone: this.phone,
                school: {
                  latlng: {
                    lat: this.$store.state.address.geometry.location.lat,
                    lng: this.$store.state.address.geometry.location.lng
                  },
                  name: this.$store.state.address.name
                }
              })
              .then(() => {
                this.$router.replace('Login')
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(error => {
            let errorCode = error.code
            let errorMessage = error.message
            if (errorCode === 'auth/email-already-in-use') {
              this.errEmail = 'อีเมลนี้ถูกใช้ไปแล้ว'
            } else if (errorCode === 'auth/invalid-email') {
              this.errEmail = 'กรอกอีเมลให้ถูกต้อง'
            } else {
              console.log(errorMessage)
            }
          })
      }
    },
    setAccept () {
      this.isNotCheck = false
    },
    validate () {
      if (
        this.errEmail === '' &&
        this.errPass === '' &&
        this.errConPass === '' &&
        this.errName === '' &&
        this.errPhone === '' &&
        this.errAddress === '' &&
        this.isAccept === true
      ) {
        return true
      } else {
        return false
      }
    },
    cancel () {
      this.$router.replace('login')
    },
    showModal () {
      let element = this.$refs.modal.$el
      $(element).modal('show')
    },
    closeModal (value) {
      if (value) {
        let element = this.$refs.modal.$el
        $(element).modal('hide')
      }
    }
  }
}
</script>

<style>
.vl {
  border-left: 1px solid #d3d3d3;
}
#back {
  color: black !important;
  background: white !important;
  border-radius: 18px;
  width: 100%;
}

#back:hover {
  background: #d3d3d3 !important;
}
</style>

<style scoped>
.input-school {
  padding: 0 3rem 0 3rem;
}
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

.register-input-control {
  position: relative;
}

input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}

input[type="tel"]:focus + i {
  color: #2094b9;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
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

#fname {
  left: 18px;
}

.input-control {
  position: relative;
  margin: 15px 0 15px 0;
  width: 100%;
}

.input-group {
  padding: 0 3rem 0 3rem;
  justify-content: center;
  align-items: center;
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
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
}

.custom-select {
  width: 100%;
  border-radius: 18px;
  border: 1pt solid rgb(234, 234, 234);
  font-size: 10pt;
  padding: 8px;
  outline: none;
}

#registerBtn {
  width: 100%;
}

@media screen and (max-width: 1280px) {
  .box {
    width: 65%;
    transform: translate(-50%, -45%);
  }
  .input-group {
    padding: 0 2.5rem 0 2.5rem;
  }
  .input-school {
    padding: 0 2.5rem 0 2.5rem;
  }
}
@media screen and (max-width: 992px) {
  .input-group {
    padding: 0 1rem 0 1rem;
  }
  .input-school {
    padding: 0 1rem 0 1rem;
  }
}
@media screen and (max-width: 767px) {
  .box {
    width: 100%;
    transform: translate(-50%, -40%);
  }
  .vl {
    display: none;
  }
  .input-group {
    padding: 0 2rem 0 2rem;
  }
  .input-school {
    padding: 0 2rem 0 2rem;
  }
}
@media screen and (max-width: 576px) {
  .box {
    width: 100%;
    transform: translate(-50%, -38%);
  }
  .vl {
    display: none;
  }
  .btn-group {
    flex-direction: column;
  }
  .input-group {
    padding: 0 4rem 0 4rem;
  }
  .input-school {
    padding: 0 4rem 0 4rem;
  }
}
</style>
