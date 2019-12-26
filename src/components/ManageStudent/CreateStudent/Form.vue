<template>
  <form>
    <small v-show="errMsg" style="color:red;font-size:12pt" class="alert-text thai">{{ errMsg }}</small>
    <div class="form-group">
      <label for="stdid">Student ID | เลขประจำตัว</label>
      <small v-show="errSid" style="color:red;" class="alert-text thai">{{ errSid }}</small>
      <input
        type="text"
        class="form-control"
        id="stdid"
        placeholder="xxxxxx"
        v-model="sid"
        @input="clearErr"
      />
    </div>
    <div class="form-group">
      <label for="plate">Name | ชื่อนักเรียน</label>
      <small v-show="errName" style="color:red;" class="alert-text thai">{{ errName }}</small>
      <div class="row">
        <div class="col-2">
          <select class="custom-select mr-sm-2" v-model="prefix" @change="clearErr">
            <option value>คำนำหน้าชื่อ...</option>
            <option value="เด็กชาย">เด็กชาย</option>
            <option value="เด็กหญิง">เด็กหญิง</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นส.">นางสาว</option>
          </select>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="plate"
            placeholder="ชื่อ"
            v-model="fname"
            @input="clearErr"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="plate"
            placeholder="นามสกุล"
            v-model="lname"
            @input="clearErr"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="phone">Phone | เบอร์โทรศัพท์</label>
      <small v-show="errPhone" style="color:red;" class="alert-text thai">{{ errPhone }}</small>
      <input
        id="phone"
        class="form-control"
        type="text"
        placeholder="08xxxxxxxx"
        maxlength="10"
        v-model="phone"
        @input="clearErr"
      />
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
      phone: '',
      errMsg: '',
      errPhone: '',
      errName: '',
      errSid: ''
    }
  },
  methods: {
    addStudent () {
      let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      if (this.validate() && this.isNotStd()) {
        managerRef
          .collection('students')
          .add({
            fname: this.fname,
            lname: this.lname,
            prefix: this.prefix,
            stu_no: this.sid,
            phone: this.phone
          })
          .then(() => {
            this.$router.replace({ path: '/dashboard/student' })
          })
      }
    },
    validate () {
      if (
        this.fname === '' ||
        this.lname === '' ||
        this.prefix === '' ||
        this.sid === '' ||
        this.phone === ''
      ) {
        this.errMsg = '** โปรดกรอกข้อมูลให้ครบถ้วน'
        return false
      } else {
        return true
      }
    },
    isNotStd () {
      let stdList = Object.keys(this.$store.state.students)
      let result = false
      if (stdList.length === 0) {
        result = true
      }
      stdList.forEach(sid => {
        let stdData = this.$store.state.students[sid]
        if (stdData.fname === this.fname && stdData.lname === this.lname) {
          this.errName = '** ชื่อนักเรียนซ้ำ'
          result = false
        }
        if (stdData.stu_no === this.sid) {
          this.errSid = '** รหัสประจำตัวนักเรียนซ้ำ'
          result = false
        }
        if (
          stdData.fname !== this.fname &&
          stdData.lname !== this.lname &&
          stdData.stu_no !== this.sid
        ) {
          result = true
        }
      })
      return result
    },
    clearErr () {
      this.errMsg = ''
      this.errName = ''
      this.errPhone = ''
      this.errSid = ''
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
  background: linear-gradient(180deg, rgba(33, 149, 186, 1) 0%);
}
</style>
