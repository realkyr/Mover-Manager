<template>
  <div class="box">
    <vs-card>
      <div slot="header">
        <div class="logo-container">
          <img id="logo" src="../assets/logo/logo.png">
        </div>
      </div>
      <div>
        <div class="input-control">
          <div class="my-input-control">
            <input v-model="email" class="thai" type="text" placeholder="E-Mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <div class="my-input-control">
            <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <div class="my-input-control">
            <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <div class="my-input-control">
            <input v-model="phone" class="thai" type="text" placeholder="เบอร์โทรศัพท์">
            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
          </div>
          <div class="my-input-control">
            <input v-model="password" class="thai" type="password" placeholder="รหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <div class="my-input-control">
            <input v-model="conPassword" class="thai" type="password" placeholder="ยืนยันรหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
        </div>
        <vs-button id="register" class="thai" @click="register">สมัครสมาชิก</vs-button>
        <vs-button id="back" color="dark" type="flat" to="/login">ยกเลิก</vs-button>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  name: 'Register',
  metaInfo: {
    title: 'Register | Mover'
  },
  data () {
    return {
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
        alert('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน')
      } else if (this.password === '' || this.conPassword === '') {
        alert('โปรดกรอกข้อมูลให้ครบถ้วน')
      } else {
        this.$router.replace('Login')
      }
    }
  }
}
</script>

<style scoped>

.box {
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 480px;
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
  margin-bottom: 15px;
  width: 100%;
  padding: 0 70px 0 70px;
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
  /* background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important; */
  border-radius: 18px;
  width: 100%;
  /* margin: 20px 0 20px 0; */
}

.input-control {
  padding: 0 40px 0 40px;
}

</style>
