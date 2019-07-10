<template>
  <form>
    <div class="form-group">
      <label for="stdid">Student ID | เลขประจำตัว</label>
      <input type="text" class="form-control" id="stdid" placeholder="xxxxxx" v-model="sid">
    </div>
    <div class="form-group">
      <label for="plate">Name | ชื่อนักเรียน</label>
      <div class="row">
        <div class="col-2">
          <select class="custom-select mr-sm-2" v-model="prefix">
            <option value="">คำนำหน้าชื่อ...</option>
            <option value="เด็กชาย">เด็กชาย</option>
            <option value="เด็กหญิง">เด็กหญิง</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นส.">นางสาว</option>
          </select>
        </div>
        <div class="col">
          <input type="text" class="form-control" id="plate" placeholder="ชื่อ" v-model="fname">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="plate" placeholder="นามสกุล" v-model="lname">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="phone">Phone | เบอร์โทรศัพท์</label>
      <input
        id="phone"
        class="form-control"
        type="text"
        placeholder="08xxxxxxxx"
        maxlength="10"
        v-model="phone"
      >
    </div>
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="addStudent">บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  data () {
    return {
      sid: '',
      prefix: '',
      fname: '',
      lname: '',
      phone: ''
    }
  },
  methods: {
    addStudent () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('students').add({
          fname: this.fname,
          lname: this.lname,
          prefix: this.prefix,
          stu_no: this.sid,
          phone: this.phone,
          position: this.$store.state.user.school.latlng,
          group: null
        })
        .then(() => {
          this.$router.replace({ path: '/dashboard/student' })
        })
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 2rem;
}

#add-btn {
  width: 10rem;
  height: 2rem;
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%
  )
}
</style>
