<template>
  <div>
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
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <label for="prefix">คำนำหน้าชื่อ</label>
          <select id="prefix" class="form-control" v-model="prefix">
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="fname">ชื่อจริง</label>
          <input type="text" class="form-control" id="fname" v-model="fname">
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="lname">นามสกุล</label>
          <input type="text" class="form-control" id="lname" v-model="lname">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="uid">รหัสเครื่อง</label>
          <input type="text" id="uid" class="form-control" v-model="uid">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label for="mobile">เบอร์โทรศัพท์</label>
          <input type="text" class="form-control" id="mobile" v-model="tel">
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="updateDriver">บันทึกข้อมูล</button>
    </div>
  </div>
</template>

<script>
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
      drivers: {}
    }
  },
  methods: {
    ...mapActions(['setPicDriver', 'setDrivers', 'updatePicDriver']),
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
            pic: path
          }, { merge: true })
        this.setPicDriver({
          duid: this.duid,
          data: path
        })
        firebase.storage().ref().child(path).getDownloadURL()
          .then(url => {
            this.updatePicDriver({
              duid: this.duid,
              url: url
            })
          })
      })
    },
    updateDriver () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('drivers').doc(this.duid).update({
          'fname': this.fname,
          'lname': this.lname,
          'phone': this.tel,
          'prefix': this.prefix,
          'uid': this.uid
        })
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('drivers').orderBy('fname').get()
        .then(snapshot => {
          snapshot.forEach(data => {
            this.drivers[data.id] = data.data()
          })
          this.setDrivers(this.drivers)
        })
      this.$router.push({ path: '/dashboard/drivers' })
    }
  }
}
</script>

<style scoped>
.mover-btn {
  background: rgba(27, 127, 158, 1);
}
</style>
