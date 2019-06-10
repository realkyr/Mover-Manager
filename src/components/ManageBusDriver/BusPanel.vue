<template>
  <div class="container-fluid mt-3 p-2 rounded buspanel">
    <div class="row p-4 d-flex align-items-center justify-content-between">
      <h3 class="thai">รถโรงเรียน</h3>
      <button class="btn mover-btn thai">&#43; เพิ่ม</button>
    </div>
    <div class="bus-listview">
      <div class="container-fluid">
        <div class="row">
          <div class="col-auto" :key="i" v-for="i in 35">
            <div class="bus-card rounded mb-3">
              <div>
                <span>
                  SBUS A1 | กค-1234
                  <button class="btn edit-btn thai ml-3"><i class="far fa-edit" /></button>
                  <button
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn del-btn thai ml-1"
                  >
                    <i class="far fa-trash-alt" />
                  </button>
                </span>
              </div>
              <div>คนขับ : สมชาย ศรีสุข</div>
              <div>กลุ่มนักเรียน : 1</div>
            </div>
            <DeleteModal id="exampleModal"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from './DeleteBus'

export default {
  components: {
    DeleteModal
  }
}
</script>

<style>
.buspanel {
  background: white;
  height: calc(100% - 80pt);
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
  background: white;
}

.bus-listview {
  /* background: red; */
  height: 60vh;
  overflow-y: scroll;
}

.edit-btn {
  border: 0.5pt solid rgb(236, 235, 243);
  border-radius: 15px;
}

.edit-btn i {
  color: rgb(242, 108, 37);
}

.del-btn {
  border: 0.5pt solid rgb(236, 235, 243);
  border-radius: 15px;
}

.del-btn {
  color: rgb(229, 23, 23);
}
</style>
