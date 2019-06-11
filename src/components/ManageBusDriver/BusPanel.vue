<template>
  <div class="container-fluid mt-3 p-2 rounded buspanel">
    <div class="row p-4 d-flex align-items-center justify-content-between">
      <h3 class="thai">รถโรงเรียน</h3>
      <button class="btn mover-btn thai">&#43; เพิ่ม</button>
    </div>
    <div class="bus-listview">
      <div class="container-fluid">
        <div class="row">
          <div class="col-auto" :key="bus" v-for="bus in Object.keys(buses)">
            <BusCard
              :bus="bus"
              :busID="buses[bus].busID"
              :plate="buses[bus].plate"
              :driverName="buses[bus].driverName"
              :studentGroup="buses[bus].studentGroup"
            />
            <DeleteModal
              :plate="buses[bus].plate"
              :busID="buses[bus].busID"
              :id="bus"
              :uid="bus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from './DeleteBus'
import BusCard from './BusCard'

export default {
  components: {
    DeleteModal,
    BusCard
  },
  data () {
    return {
      buses: {
        // all buses information goes here
        A1: {
          busID: 'SBUS A1',
          plate: 'กค-5417',
          driverName: 'สมชาย ศรีสุข',
          phoneNum: '0945587588',
          studentGroup: 1
        },
        A2: {
          busID: 'SBUS A2',
          plate: '1 มม-112',
          driverName: 'ธีรภัทร ฟูเทพ',
          phoneNum: '081xxxxxx',
          studentGroup: 1
        }
      }
    }
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

.bus-listview {
  /* background: red; */
  height: 60vh;
  overflow-y: scroll;
}
</style>
