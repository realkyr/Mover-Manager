<template>
  <div class="container-fluid mt-3 rounded buspanel">
    <div class="row p-4 d-flex align-items-center justify-content-between">
      <h3 class="thai">รถโรงเรียน</h3>
      <button class="btn mover-btn thai">&#43; เพิ่ม</button>
    </div>
    <div style="overflow-y: hidden;" class="row">
      <div class="col-auto" :key="i" v-for="i in 8">
        <div class="bus-card rounded mb-3">
          <div></div>
          <div>SBUS A1 | กค-1234</div>
          <div>คนขับ : สมชาย ศรีสุข</div>
          <div>กลุ่มนักเรียน : 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.buspanel {
  background: white;
  height: calc(100vh - 31vh);
}

.mover-btn {
  background: rgb(242, 108, 37);
  color: white;
  font-size: 13px;
  border-radius: 20px;
  height: 25px;
  padding: 0 20px 0 20px;
}

.bus-card {
  padding: 1em;
  border: 0.5pt solid rgb(236, 235, 243);
}
</style>
