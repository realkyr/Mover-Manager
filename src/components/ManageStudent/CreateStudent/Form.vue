<template>
  <form>
    <div class="form-group">
      <label for="stdid">Student ID | เลขประจำตัว</label>
      <input type="text" class="form-control" id="stdid" placeholder="xxxxxx">
    </div>
    <div class="form-group">
      <label for="plate">Name | ชื่อนักเรียน</label>
      <div class="row">
        <div class="col-2">
          <select class="custom-select mr-sm-2" id="student">
            <option selected>คำนำหน้าชื่อ...</option>
            <option value="1">เด็กชาย</option>
            <option value="2">เด็กหญิง</option>
            <option value="3">นาย</option>
            <option value="4">นาง</option>
            <option value="5">นส.</option>
          </select>
        </div>
        <div class="col">
          <input type="text" class="form-control" id="plate" placeholder="ชื่อ">
        </div>
        <div class="col">
          <input type="text" class="form-control" id="plate" placeholder="นามสกุล">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="plate">Phone | เบอร์โทรศัพท์</label>
      <input type="text" class="form-control" id="stdid" placeholder="08xxxxxxxx  09xxxxxxxx">
    </div>
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="addStudent">บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/firestore'
export default {
  data () {
    return {

    }
  },
  methods: {
    addStudent () {

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
