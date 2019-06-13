<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span style="color: #7D8797">ภาพรวม</span> > รถทั้งหมด
      <statebar
        :allBus="Object.keys(buses).length"
        :active="1"
      />
      <!--
        state bar recieve props as a number
        which has been calculated
        ใส่ prop เป็นรถที่ขับอยู่ รถทั้งหมด ต่าง ๆ
      -->
      <Map :buses="buses" />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Map from '../components/Dashboard/Map'
import statebar from '../components/Dashboard/Statebar.vue'

export default {
  components: {
    Searchbar,
    Sidebar,
    Map,
    statebar
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
          remainingStudent: 3,
          maximumStudent: 5,
          position: {
            lat: 13.726331,
            lng: 100.657192
          }
        },
        A2: {
          busID: 'SBUS A2',
          plate: '1 มม-112',
          driverName: 'ธีรภัทร ฟูเทพ',
          phoneNum: '081xxxxxx',
          remainingStudent: 3,
          maximumStudent: 100,
          position: {
            lat: 13.732246,
            lng: 100.782683
          }
        }
      }
    }
  }
}
</script>

<style>
ul {
  padding-inline-start: 0;
}
</style>
