<template>
  <div>
    <Searchbar/>
    <Sidebar/>
    <div class="inside-container thai">
      <span>บัญชีผู้ใช้</span>
      <div class="row mt-3 ml-1">
        <div
          class="content col-4 rounded d-flex justify-content-center align-items-center flex-column shadow"
        >
          <div v-if="!profile" class="profile">
            <img src="../../assets/holder/profileholder.png">
          </div>
          <div v-else class="profile">
            <img :src="profile">
          </div>
          <input type="file" ref="file" style="display: none">
          <button class="btn mover-btn thai" @click="$refs.file.click()">เปลี่ยนรูปโปรไฟล์</button>
          <button
            type="button"
            id="qrBtn"
            class="btn mover-btn thai"
            data-toggle="modal"
            data-target="#qrModal"
          >
            <i style="position: initial; color: white;" class="fas fa-qrcode"></i>ดูคิวอาร์โค้ด
          </button>
          <div class="d-flex justify-content-center mt-5">
            <div class="col- d-flex flex-column">
              <span class="mb-3">
                <i class="fas fa-envelope" aria-hidden="true"></i>อีเมล:
              </span>
              <span class="mb-3">
                <i class="fas fa-user-circle" aria-hidden="true"></i>ชื่อ:
              </span>
              <span class="mb-3">
                <i class="fas fa-user-circle" aria-hidden="true"></i>นามสกุล:
              </span>
              <span class="mb-3">
                <i class="fas fa-mobile-alt" aria-hidden="true"></i>เบอร์โทรศัพท์:
              </span>
            </div>
            <div class="col d-flex flex-column" style="width: 188.5px;">
              <InputInfo :placeholder="`อีเมล`" :type="`text`" ref="email" v-if="isEdit1"/>
              <span v-else class="mb-4">{{ email }}</span>
              <InputInfo :placeholder="`ชื่อ`" :type="`text`" ref="fname" v-if="isEdit2"/>
              <span v-else class="mb-4">{{ fname }}</span>
              <InputInfo :placeholder="`นามสกุล`" :type="`text`" ref="lname" v-if="isEdit3"/>
              <span v-else class="mb-4">{{ lname }}</span>
              <InputInfo :placeholder="`เบอร์โทร`" :type="`tel`" ref="phone" v-if="isEdit4"/>
              <span v-else class="mb-4">{{ phone }}</span>
            </div>
            <div class="col d-flex flex-column p-0">
              <span class="mb-3" @click="editToggle1">
                <i v-if="!isEdit1" class="fas fa-edit text-danger"></i>
                <i v-else class="fas fa-check text-success"></i>
              </span>
              <span class="mb-3" @click="editToggle2">
                <i v-if="!isEdit2" class="fas fa-edit text-danger"></i>
                <i v-else class="fas fa-check text-success"></i>
              </span>
              <span class="mb-3" @click="editToggle3">
                <i v-if="!isEdit3" class="fas fa-edit text-danger"></i>
                <i v-else class="fas fa-check text-success"></i>
              </span>
              <span class="mb-3" @click="editToggle4">
                <i v-if="!isEdit4" class="fas fa-edit text-danger"></i>
                <i v-else class="fas fa-check text-success"></i>
              </span>
            </div>
          </div>
          <div v-if="isEdit" class="btn-group">
            <button type="button" class="btn mover-btn thai w-100">บันทึก</button>
          </div>
        </div>
        <div class="col pr-4">
          <Map/>
          <div class="school-name thai d-flex justify-content-start align-items-center ml-3 shadow">
            <div class="ml-4">
              <i style="color:red;font-size:18pt;" class="fas fa-map-marker-alt"></i>
              <span class="font-weight-light">โรงเรียนหอวัง</span>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="qrModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="qrModalCenterTitle"
          aria-hidden="true"
        >
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
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Profile/Map2'
import InputInfo from '../../components/Profile/InputInfo'
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
      email: 'ingkaratt@gmail.com',
      fname: 'ing',
      lname: 'tin',
      phone: '080000000',
      profile: '',
      isEdit: false,
      isEdit1: false,
      isEdit2: false,
      isEdit3: false,
      isEdit4: false
    }
  },
  methods: {
    editToggle1 () {
      if (!this.isEdit) {
        this.isEdit = true
      }
      this.isEdit1 = !this.isEdit1
    },
    editToggle2 () {
      if (!this.isEdit) {
        this.isEdit = true
      }
      this.isEdit2 = !this.isEdit2
    },
    editToggle3 () {
      if (!this.isEdit) {
        this.isEdit = true
      }
      this.isEdit3 = !this.isEdit3
    },
    editToggle4 () {
      if (!this.isEdit) {
        this.isEdit = true
      }
      this.isEdit4 = !this.isEdit4
    }
  }
}
</script>

<style>
.content {
  padding: 20px 0;
  background: white;
}
.input-info {
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

.my-output-control {
  margin: 1rem 0 0 0;
  display: flex;
}

.profile img {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: 150px;
  border-radius: 20px;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  margin: 1rem auto 1rem auto;
}
</style>

<style scoped>
.school-name {
  font-size: 16pt;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  width: 58%;
  height: 70px;
  position: fixed;
  background: white;
  bottom: 50px;
}
.col-4 {
  max-width: 28.333333%;
}
.mover-btn {
  width: 10rem;
}
.mover-btn i {
  padding: 0 5px 0 0;
}
.inside-container {
  height: calc(100vh - 50pt);
  padding: 20px;
}
.input-control {
  margin: 2rem 0 2rem 0;
  width: 100%;
}
i {
  position: initial;
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

.btn {
  margin: 0;
  padding: 0;
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

#qrBtn {
  background: #f26b27 !important;
  border: none;
  display: block;
  margin: 10px auto;
  /* height: 35px; */
  padding: 5px;
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
