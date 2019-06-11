<template>
  <form>
    <div class="form-group">
      <label for="busid">Bus ID | รหัสของรถ</label>
      <input type="text" class="form-control" id="busid" placeholder="SBUS A1">
    </div>
    <div class="form-group">
      <label for="plate">License Plate | ทะเบียนรถ</label>
      <input type="text" class="form-control" id="plate" placeholder="กก 1103">
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกคนขับรถ
        <button class="btn mover-btn thai">&#43; เพิ่มคนขับ</button>
      </label>
      <select class="custom-select mr-sm-2" id="driver">
        <option selected>เลือกคนขับ...</option>
        <option value="1">นายธีรภัทร ฟูเทพ</option>
        <option value="2">นายภูรี กานุสนธิ์</option>
        <option value="3">นายอิงครัต ทินกรศรีสุภาพ</option>
      </select>
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกกลุ่มนักเรียน
        <button class="btn mover-btn thai">&#43; เพิ่มกลุ่ม</button>
      </label>
      <select class="custom-select mr-sm-2" id="driver">
        <option selected>เลือกกลุ่มนักเรียน...</option>
        <option value="1">1 เช้า</option>
        <option value="2">1 บ่าย</option>
      </select>
    </div>
  </form>
</template>
