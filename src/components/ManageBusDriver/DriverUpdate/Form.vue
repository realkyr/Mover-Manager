<template>
  <div>
    <hr />
    <div class="form-group">
      <input
        id="profilePic"
        ref="file"
        type="file"
        class="form-control-file"
        style="display: none"
        @change="onFileSelected"
      >
      <button class="btn mover-btn thai" @click="$refs.file.click()">เปลี่ยนรูปโปรไฟล์</button>
    </div>
    <small v-show="errMsg" style="color:red;font-size:11pt" class="alert-text thai">{{ errMsg }}</small>
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <label for="prefix">คำนำหน้าชื่อ</label>
          <select id="prefix" class="form-control" v-model="prefix" @change="clearErr">
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="fname">ชื่อจริง</label>
          <input type="text" class="form-control" id="fname" v-model="fname" @input="clearErr">
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="lname">นามสกุล</label>
          <input type="text" class="form-control" id="lname" v-model="lname" @input="clearErr">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="uid">รหัสเครื่อง</label>
          <input type="text" id="uid" class="form-control" v-model="uid" @input="clearErr">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label for="mobile">เบอร์โทรศัพท์</label>
          <input type="text" class="form-control" id="mobile" v-model="tel" @input="clearErr">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column">
      <button type="button" id="add-btn" class="btn mover-btn thai mb-2" @click="updateDriver">บันทึกข้อมูล</button>
      <button type="button" id="drop-btn" class="btn mover-btn thai" @click="deleteDriver">
        <i class="far fa-trash-alt"/>  ลบ
      </button>
    </div>
    <div
      id="alertModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center flex-column align-items-center">
            <p>แน่ใจว่าจะลบคนขับ <span class="text-danger">{{ prefix }}{{ fname }} {{ lname }}</span>?</p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" id="noBtn" class="btn mover-btn" @click="removeOption">ไม่</button>
            <button type="button" id="yesBtn" class="btn mover-btn" @click="acceptOption">แน่ใจ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import { mapActions } from 'vuex'
export default {
  props: {
    duid: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imageFile: null,
      prefix: this.$store.state.drivers[this.duid].prefix,
      fname: this.$store.state.drivers[this.duid].fname,
      lname: this.$store.state.drivers[this.duid].lname,
      uid: this.$store.state.drivers[this.duid].uid,
      tel: this.$store.state.drivers[this.duid].phone,
      drivers: {},
      imageUrl: null,
      errMsg: ''
    }
  },
  methods: {
    ...mapActions(['setPathDriver', 'setDrivers']),
    onFileSelected (event) {
      this.imageFile = event.target.files[0]
      this.onUpload()
    },
    onUpload () {
      let uploadTask = firebase.storage().ref()
        .child('images/drivers/' + this.duid + '/' + this.imageFile.name)
        .put(this.imageFile)
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is' + progress + '% done')
      }, () => {}, () => {
        let path = uploadTask.snapshot.ref.fullPath
        firebase.firestore().collection('managers').doc(this.$store.state.uid)
          .collection('drivers').doc(this.duid)
          .set({
            pic: path,
            pic_link: ''
          }, { merge: true })
        this.setPathDriver({
          duid: this.duid,
          data: path
        })
        firebase.storage().ref().child(path).getDownloadURL()
          .then(url => {
            this.imageUrl = url
            this.$emit('onUploaded', this.imageUrl)
          })
      })
    },
    updateDriver () {
      if (this.validate()) {
        firebase.firestore().collection('managers').doc(this.$store.state.uid)
          .collection('drivers').doc(this.duid).update({
            'fname': this.fname,
            'lname': this.lname,
            'phone': this.tel,
            'prefix': this.prefix
          }).then(() => {
            this.$router.push({ path: '/dashboard/bus/drivers' })
          })
      } else {
        this.errMsg = '** โปรดกรอกข้อมูลให้ครบถ้วน'
      }
    },
    validate () {
      if (
        this.prefix === '' ||
        this.fname === '' ||
        this.lname === '' ||
        this.tel === '' ||
        this.uid === ''
      ) {
        return false
      } else {
        return true
      }
    },
    clearErr () {
      this.errMsg = ''
    },
    deleteDriver () {
      $('#alertModal').modal('show')
    },
    removeOption () {
      $('#alertModal').modal('hide')
    },
    acceptOption () {
      let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      managerRef
        .collection('drivers').doc(this.duid).delete()
        .then(() => {
          $('#alertModal').modal('hide')
          managerRef.collection('drivers').get()
            .then(snapshot => {
              let tmpDrivers = {}
              snapshot.forEach(data => {
                tmpDrivers[data.id] = data.data()
              })
              this.setDrivers(tmpDrivers)
              this.$router.replace({ path: '/dashboard/bus/drivers' })
            })
        })
    }
  }
}
</script>

<style scoped>
.mover-btn {
  background: rgba(27, 127, 158, 1);
}
#noBtn {
  background: gray;
}
#add-btn {
  width: 8rem;
  height: 1.7rem;
  background: linear-gradient(180deg, rgba(33, 149, 186, 1) 0%);
}
#drop-btn {
  width: 8rem;
  height: 1.7rem;
  background: #d9534f;
}
#drop-btn:hover {
  color: black;
}
</style>
