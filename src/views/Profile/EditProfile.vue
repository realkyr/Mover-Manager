<template>
  <div>
    <Searchbar/>
    <Sidebar/>
    <div class="inside">
      <div class="container-fluid" style="padding: 0 20px 0 90px;">
        <div class="content rounded">
          <h4 class="thai ml-4 mt-4">แก้ไขโปรไฟล์</h4>
          <div class="row mt-5">
            <div class="col-6">
              <div class="input-control">
                <div class="my-input-control">
                  <input v-model="email" class="thai" type="text" placeholder="อีเมล">
                  <i class="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <small v-show="errEmail" style="color:red;" class="alert-text thai">{{ errEmail }}</small>
                <div class="my-input-control">
                  <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
                  <i class="fas fa-user-circle" aria-hidden="true"></i>
                </div>
                <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
                <div class="my-input-control">
                  <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
                  <i class="fas fa-user-circle" aria-hidden="true"></i>
                </div>
                <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
                <div class="my-input-control">
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
                <div class="my-input-control">
                  <input v-model="password" class="thai" type="password" placeholder="รหัสผ่าน">
                  <i class="fas fa-lock" aria-hidden="true"></i>
                </div>
                <small v-show="errPass" style="color:red;" class="alert-text thai">{{ errPass }}</small>
                <div class="my-input-control">
                  <input
                    v-model="conPassword"
                    class="thai"
                    type="password"
                    placeholder="ยืนยันรหัสผ่าน"
                  >
                  <i class="fas fa-lock" aria-hidden="true"></i>
                </div>
                <small
                  v-show="errConPass"
                  style="color:red;"
                  class="alert-text thai"
                >{{ errConPass }}</small>
              </div>
            </div>
            <div class="vl"></div>
            <div class="col input-school">
              <small v-show="errAddress" style="color:red;" class="alert-text thai">{{ errAddress }}</small>
              <Map />
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
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Register/Map'
export default {
  components: {
    Searchbar,
    Sidebar,
    Map
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
    updateInfo () {
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
.my-input-control {
  position: relative;
  padding: 0 15px 0 15px;
}
.input-school {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem 2rem 3rem;
}
.input-control {
  position: relative;
  margin: 0 0 15px 0;
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

.col-3 {
  max-width: 20%;
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
