<template>
  <div class="box">
    <div class="logo-container">
      <img id="logo" src="../assets/logo/logo.png">
    </div>
    <hr>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 input-group">
        <div class="input-control">
          <div class="register-input-control">
            <input v-model="email" class="thai" type="text" placeholder="E-Mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <small v-show="errEmail" style="color:red;" class="alert-text thai">{{ errEmail }}</small>
          <div class="register-input-control">
            <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
          <div class="register-input-control">
            <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
          <div class="register-input-control">
            <input
              v-model="phone"
              class="thai"
              type="tel"
              placeholder="เบอร์โทรศัพท์"
              maxlength="10"
            >
            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
          </div>
          <small v-show="errPhone" style="color:red;" class="alert-text thai">{{ errPhone }}</small>
          <div class="register-input-control">
            <input v-model="password" class="thai" type="password" placeholder="รหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errPass" style="color:red;" class="alert-text thai">{{ errPass }}</small>
          <div class="register-input-control">
            <input v-model="conPassword" class="thai" type="password" placeholder="ยืนยันรหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errConPass" style="color:red;" class="alert-text thai">{{ errConPass }}</small>
        </div>
      </div>
      <div class="vl"></div>
      <div class="col input-school">
        <small v-show="errAddress" style="color:red;" class="alert-text thai">{{ errAddress }}</small>
        <Map/>
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
  mounted () {
    this.$store.state.address = { name: '' }
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
      let withoutSpace = this.password.replace(/ /g, '')
      if (withoutSpace.length < 8) {
        this.errPass = 'โปรดกรอกรหัสให้มากกว่า 7 ตัวอักษร'
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
      if (!('geometry' in this.$store.state.address)) {
        this.errAddress = 'โปรดกรอกชื่อโรงเรียน'
      } else {
        this.errAddress = ''
      }
      if (this.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user.user.uid)
            firebase
              .firestore()
              .collection('managers')
              .doc(user.user.uid)
              .set({
                fname: this.fname,
                lname: this.lname,
                phone: this.phone,
                school: {
                  latlng: {
                    lat: this.$store.state.address.geometry.location.lat,
                    lng: this.$store.state.address.geometry.location.lng
                  },
                  name: this.$store.state.address.name
                },
                url: 'something'
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
            console.log(errorCode)
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
    validate () {
      if (
        this.errEmail === '' &&
        this.errPass === '' &&
        this.errConPass === '' &&
        this.errName === '' &&
        this.errPhone === '' &&
        this.errAddress === ''
      ) {
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

<style>
.vl {
  border-left: 1px solid #d3d3d3;
}
</style>

<style scoped>
.box {
  background: white;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 60%;
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

i {
  position: absolute;
  left: 5pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
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

#register {
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
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
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
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
    transform: translate(-50%, -42%);
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
  .input-group {
    padding: 0 4rem 0 4rem;
  }
  .input-school {
    padding: 0 4rem 0 4rem;
  }
}
</style>
