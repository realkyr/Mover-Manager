<template>
  <div>
    <Searchbar/>
    <Sidebar/>
    <div class="inside-container">
      <div class="content rounded">
        <h4 class="thai ml-4 mt-4">แก้ไขโปรไฟล์</h4>
        <div class="row">
          <div class="col-6 d-flex justify-content-center align-items-center flex-column">
            <div class="profile">
              <img src="../../assets/holder/profileholder.png">
            </div>
            <div class="input-control">
              <InputInfo
                :icon="`fas fa-envelope`"
                :placeholder="`อีเมล`"
                :type="`text`"
                ref="email"
              />
              <small v-show="errEmail" style="color:red;" class="alert-text thai">{{ errEmail }}</small>
              <InputInfo
                :icon="`fas fa-user-circle`"
                :placeholder="`ชื่อ`"
                :type="`text`"
                ref="fname"
              />
              <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
              <InputInfo
                :icon="`fas fa-user-circle`"
                :placeholder="`นามสกุล`"
                :type="`text`"
                ref="lname"
              />
              <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
              <InputInfo
                :icon="`fas fa-mobile-alt`"
                :placeholder="`เบอร์โทรศัพท์`"
                :type="`tel`"
                ref="phone"
              />
              <small v-show="errPhone" style="color:red;" class="alert-text thai">{{ errPhone }}</small>
              <InputInfo
                :icon="`fas fa-lock`"
                :placeholder="`รหัสผ่าน`"
                :type="`password`"
                ref="password"
              />
              <small v-show="errPass" style="color:red;" class="alert-text thai">{{ errPass }}</small>
              <InputInfo
                :icon="`fas fa-lock`"
                :placeholder="`ยืนยันรหัสผ่าน`"
                :type="`password`"
                ref="conPassword"
              />
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
          <button type="button" id="regiter" class="btn thai" @click="updateInfo">บันทึกข้อมูล</button>
          <router-link :to="{ name: 'profile' }">
            <button type="button" id="back" class="btn thai">ยกเลิก</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputInfo from '../../components/Profile/InputInfo'
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Register/Map'
export default {
  components: {
    Searchbar,
    Sidebar,
    Map,
    InputInfo
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
      password: '',
      conPassword: '',
      fname: '',
      lname: '',
      phone: ''
    }
  },
  methods: {
    updateInfo () {
      if (this.$refs.conPassword.info !== this.$refs.password.info) {
        this.errConPass = 'โปรดกรอกรหัสให้ตรงกัน'
      } else {
        this.errConPass = ''
      }
      if (this.$refs.password.info === '' || this.$refs.conPassword.info === '') {
        this.errPass = 'โปรดกรอกรหัสผ่าน'
      } else {
        this.errPass = ''
      }
      let withoutSpace = this.$refs.password.info.replace(/ /g, '')
      if (withoutSpace.length < 8) {
        this.errPass = 'โปรดกรอกรหัสให้มากกว่า 7 ตัวอักษร'
      } else {
        this.errPass = ''
      }
      if (this.$refs.email.info === '') {
        this.errEmail = 'โปรดกรอกอีเมล'
      } else {
        this.errEmail = ''
      }
      if (this.$refs.phone.info === '') {
        this.errPhone = 'โปรดกรอกเบอร์โทรศัพท์'
      } else {
        this.errPhone = ''
      }
      if (this.$refs.fname.info === '' || this.$refs.lname.info === '') {
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
    }
  }
}
</script>

<style scoped>
.inside-container {
  padding: 20px;
}
.content {
  padding: 10px 20px 10px 20px;
}
.my-input-control {
  position: relative;
  padding: 0 15px 0 15px;
}
.input-school {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem 0 3rem;
}
.input-control {
  position: relative;
  padding: 0 4rem 0 4rem;
  width: 100%;
}
i {
  position: absolute;
  left: 16pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}

.header {
  font-size: 14pt;
}

.list-group {
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.btn-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  margin: 1rem auto 1rem auto;
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

.active {
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  );
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
