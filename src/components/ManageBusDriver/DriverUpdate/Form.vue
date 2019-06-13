<template>
  <form>
    <div class="form-group">
      <label for="profilePic">รูปโปรไฟล์</label>
      <input type="file" class="form-control-file" id="profilePic">
    </div>
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <label for="prefix">คำนำหน้าชื่อ</label>
          <select id="prefix" class="form-control">
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </select>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="fname">ชื่อจริง</label>
          <input type="text" class="form-control" id="fname" value="Jane">
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="lname">นามสกุล</label>
          <input type="text" class="form-control" id="lname" value="Doe">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="uid">รหัสเครื่อง</label>
          <input type="text" id="uid" class="form-control" value="EF236D0-521A-57D2-B27C-A55662F7A26B">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label for="mobile">เบอร์โทรศัพท์</label>
          <input type="text" class="form-control" id="mobile" value="0945587588">
        </div>
      </div>
    </div>
  </form>
</template>
