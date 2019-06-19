<template>
  <form>
    <div class="form-group">
      <label for="busid">Student ID | เลขประจำตัว</label>
      <input type="text" class="form-control" id="busid" placeholder="xxxxxx">
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
      <input type="text" class="form-control" id="busid" placeholder="08xxxxxxxx  09xxxxxxxx">
    </div>
  </form>
</template>

<style scoped>
.form-group {
  margin-bottom: 2rem;
}
</style>
