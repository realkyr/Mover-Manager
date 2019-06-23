<template>
  <div>
    <Searchbar ref="searchProfile"/>
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
          <input type="file" ref="file" style="display: none" @change="onFileSelected">
          <button class="btn mover-btn thai" @click="$refs.file.click()">เปลี่ยนรูปโปรไฟล์</button>
          <button
            type="button"
            id="qrBtn"
            class="btn mover-btn thai"
            @click="showModal"
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
              <InputInfo :placeholder="`อีเมล`" :type="`email`" :initialValue="email" ref="email" v-if="isEdit1"/>
              <span v-else class="mb-3">{{ email }}</span>
              <InputInfo :placeholder="`ชื่อ`" :type="`text`" :initialValue="fname" ref="fname" v-if="isEdit2"/>
              <span v-else class="mb-3">{{ fname }}</span>
              <InputInfo :placeholder="`นามสกุล`" :type="`text`" :initialValue="lname" ref="lname" v-if="isEdit3"/>
              <span v-else class="mb-3">{{ lname }}</span>
              <InputInfo :placeholder="`เบอร์โทร`" :type="`tel`" :initialValue="phone" ref="phone" v-if="isEdit4"/>
              <span v-else class="mb-3">{{ phone }}</span>
            </div>
            <div class="col d-flex flex-column p-0">
              <span class="mb-3" @click="editToggle1">
                <i v-if="!isEdit1" class="fas fa-edit text-primary"></i>
                <i v-else class="fas fa-times-circle text-danger"></i>
              </span>
              <span class="mb-3" @click="editToggle2">
                <i v-if="!isEdit2" class="fas fa-edit text-primary"></i>
                <i v-else class="fas fa-times-circle text-danger"></i>
              </span>
              <span class="mb-3" @click="editToggle3">
                <i v-if="!isEdit3" class="fas fa-edit text-primary"></i>
                <i v-else class="fas fa-times-circle text-danger"></i>
              </span>
              <span class="mb-3" @click="editToggle4">
                <i v-if="!isEdit4" class="fas fa-edit text-primary"></i>
                <i v-else class="fas fa-times-circle text-danger"></i>
              </span>
            </div>
          </div>
          <div v-if="isEdit" class="btn-group">
            <button type="button" class="btn mover-btn thai w-100" @click="editProfile">บันทึก</button>
          </div>
        </div>
        <div class="col pr-4">
          <Map/>
          <div class="school-name thai d-flex justify-content-start align-items-center ml-3 shadow">
            <div class="ml-4 d-flex justify-content-start align-items-center">
              <i style="color:red;font-size:18pt;" class="fas fa-map-marker-alt"></i>
              <InputInfo :placeholder="`นามสกุล`" :type="`text`" :initialValue="lname" ref="schoolName" v-if="isEdit5"/>
              <span v-else class="font-weight-light">โรงเรียนหอวัง</span>
              <span @click="editToggle5">
                <i v-if="!isEdit5" class="fas fa-edit text-primary"></i>
                <i v-else class="fas fa-times-circle text-danger"></i>
              </span>
            </div>
          </div>
        </div>
        <!-- qr modal -->
        <QrModal ref="modal"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Profile/Map2'
import InputInfo from '../../components/Profile/InputInfo'
import QrModal from '../../components/Profile/QrModal'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Searchbar,
    Sidebar,
    Map,
    InputInfo,
    QrModal
  },
  mounted () {
    this.$store.state.address = { name: '' }
  },
  data () {
    return {
      email: this.getUserInfo().email,
      fname: this.getUserInfo().fname,
      lname: this.getUserInfo().lname,
      phone: this.getUserInfo().phone,
      profile: this.getProfilePic(),
      imageFile: null,
      isEdit: false,
      isEdit1: false,
      isEdit2: false,
      isEdit3: false,
      isEdit4: false,
      isEdit5: false
    }
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['setUser', 'setProfile']),
    getUserInfo () {
      return this.getUser()
    },
    editToggle1 () {
      // this.isEdit = !this.isEdit
      this.isEdit1 = !this.isEdit1
      this.checkEdit()
    },
    editToggle2 () {
      this.isEdit2 = !this.isEdit2
      this.checkEdit()
    },
    editToggle3 () {
      this.isEdit3 = !this.isEdit3
      this.checkEdit()
    },
    editToggle4 () {
      this.isEdit4 = !this.isEdit4
      this.checkEdit()
    },
    editToggle5 () {
      this.isEdit5 = !this.isEdit5
      this.checkEdit()
    },
    checkEdit () {
      if (this.isEdit1 || this.isEdit2 || this.isEdit3 || this.isEdit4) {
        this.isEdit = true
      } else if (!this.isEdit1 && !this.isEdit2 && !this.isEdit3 && !this.isEdit4) {
        this.isEdit = false
      }
    },
    editProfile () {
      this.checkValue()
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .update({
          'email': this.email,
          'fname': this.fname,
          'lname': this.lname,
          'phone': this.phone
        })
      firebase.firestore().collection('managers').doc(this.$store.state.uid).get()
        .then(data => {
          this.setUser(data.data())
        })
      this.$refs.searchProfile.displayName = `${this.fname} ${this.lname}`
      this.isEdit = false
      this.isEdit1 = false
      this.isEdit2 = false
      this.isEdit3 = false
      this.isEdit4 = false
    },
    checkValue () {
      if (this.isEdit1) {
        this.email = this.$refs.email.info
      }
      if (this.isEdit2) {
        this.fname = this.$refs.fname.info
      }
      if (this.isEdit3) {
        this.lname = this.$refs.lname.info
      }
      if (this.isEdit4) {
        this.phone = this.$refs.phone.info
      }
    },
    showModal () {
      let element = this.$refs.modal.$el
      $(element).modal('show')
    },
    onFileSelected (event) {
      this.imageFile = event.target.files[0]
      this.onUpload()
      this.profile = URL.createObjectURL(event.target.files[0])
    },
    onUpload () {
      let uploadTask = firebase.storage().ref()
        .child('images/profile/' + this.$store.state.uid + '/' + this.imageFile.name)
        .put(this.imageFile)
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is' + progress + '% done')
      }, () => {}, () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then((downloadUrl) => {
            firebase.firestore().collection('managers').doc(this.$store.state.uid)
              .set({
                profile: downloadUrl
              }, { merge: true })
            this.setProfile(downloadUrl)
          })
      })
    },
    getProfilePic () {
      if ('profile' in this.$store.state.user) {
        return this.$store.state.user.profile
      } else {
        return null
      }
    }
  }
}
</script>

<style>
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
.content {
  padding: 20px 10px 20px 10px;
  background: white;
}
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
.col {
  padding: 0px 10px 0px 10px;
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
  padding: 0px 8px 0px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
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

#qrBtn {
  background: #f26b27 !important;
  border: none;
  display: block;
  margin: 10px auto;
  padding: 5px;
}
</style>
