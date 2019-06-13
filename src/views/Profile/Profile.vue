<template>
  <div>
    <Searchbar/>
    <Sidebar />
    <div class="inside">
      <div class="container-fluid" style="padding: 0 20px 0 90px;">
        <div class="content rounded">
          <div class="row">
            <div class="col">
              <h4 class="thai ml-4 mt-4">โปรไฟล์</h4>
            </div>
            <div class="col-2 d-flex justify-content-center align-item-center">
              <router-link :to="{ name: 'edit-profile' }" >
                <button type="button" class="btn thai">Edit Profile</button>
              </router-link>
            </div>
          </div>
          <div class="profile">
            <img src="../../assets/holder/profileholder.png">
          </div>
          <button type="button" id="qrBtn" class="btn" data-toggle="modal" data-target="#qrModal"><i style="position: initial; color: white;" class="fas fa-qrcode"></i>ดูคิวอาร์โค้ด</button>
          <!-- Modal -->
          <div class="modal fade" id="qrModal" tabindex="-1" role="dialog" aria-labelledby="qrModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="qrModalLongTitle">My QR Code</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="myQr"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-6">
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
              <small v-show="errAddress" style="color:red;" class="alert-text thai"
              > {{ errAddress }} </small>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Profile/Map'
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
      if (this.validate()) {}
    },
    validate () {
      if (this.errEmail === '' && this.errPass === '' && this.errConPass === '' &&
       this.errName === '' && this.errPhone === '' && this.errAddress === '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.inside {
  background: rgb(243, 243, 243);
  height: calc(100vh - 50pt);
  justify-content: center;
  display: flex;
  align-items: center;
}
.content {
  padding: 10px;
  background: white;
}
.row {
  justify-content: center;
  align-items: center;
}
.input-school {
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

input[type="tel"]:focus + i {
  color: #2094b9;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

.my-input-control {
  position: relative;
  padding: 0 15px 0 15px;
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
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
}

.active {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%)
}

.col-3 {
  max-width: 20%;
}

.vl {
  border-left: 1px solid #d3d3d3;
  height: 20rem;
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

.profile img {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: 150px;
  border-radius: 20px;
}

#qrBtn {
  background: #F26B27 !important;
  border: none;
  display: block;
  margin: 10px auto;
}
.myQr {
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  background: #aaa;
  margin: auto;
}
</style>
