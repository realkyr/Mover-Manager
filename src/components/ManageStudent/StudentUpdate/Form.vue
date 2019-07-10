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
            <option value="เด็กชาย">เด็กชาย</option>
            <option value="เด็กหญิง">เด็กหญิง</option>
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
          <label for="uid">เลขประจำตัวนักเรียน</label>
          <input type="text" id="uid" class="form-control" v-model="stuNo">
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
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="updateStudent">บันทึกข้อมูล</button>
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
    sid: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imageFile: null,
      prefix: this.$store.state.students[this.sid].prefix,
      fname: this.$store.state.students[this.sid].fname,
      lname: this.$store.state.students[this.sid].lname,
      stuNo: this.$store.state.students[this.sid].stu_no,
      tel: this.$store.state.students[this.sid].phone,
      students: {},
      imageUrl: null
    }
  },
  methods: {
    ...mapActions(['setPathStudent', 'setStudents']),
    onFileSelected (event) {
      this.imageFile = event.target.files[0]
      this.onUpload()
    },
    onUpload () {
      let uploadTask = firebase.storage().ref()
        .child('images/students/' + this.sid + '/' + this.imageFile.name)
        .put(this.imageFile)
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is' + progress + '% done')
      }, () => {}, () => {
        let path = uploadTask.snapshot.ref.fullPath
        firebase.firestore().collection('managers').doc(this.$store.state.uid)
          .collection('students').doc(this.sid)
          .set({
            pic: path
          }, { merge: true })
        this.setPathStudent({
          sid: this.sid,
          data: path
        })
        firebase.storage().ref().child(path).getDownloadURL()
          .then(url => {
            this.imageUrl = url
            this.$emit('onUploaded', this.imageUrl)
          })
      })
    },
    updateStudent () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('students').doc(this.sid).update({
          'fname': this.fname,
          'lname': this.lname,
          'phone': this.tel,
          'prefix': this.prefix,
          'stu_no': this.stuNo
        }).then(() => {
          this.$router.push({ path: '/dashboard/student' })
        })
    }
  }
}
</script>

<style scoped>
.mover-btn {
  background: rgba(27, 127, 158, 1);
}
</style>
