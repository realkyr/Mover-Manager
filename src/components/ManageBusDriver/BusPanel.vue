<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">รถโรงเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link
          to="bus/create"
          tag="button"
          class="btn mover-btn thai"
        >
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่ม
        </router-link>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="this.buses.length === 0">{{ errMsg }}</span>
      <div v-else class="row">
        <div class="col-auto" :key="bus.cid" v-for="bus in buses">
          <BusCard
            :bus="bus.cid"
            :busID="bus.busID"
            :plate="bus.plate"
            :driver="bus.driver"
            :studentGroup="bus.studentGroup"
          />
          <DeleteModal
            :plate="bus.plate"
            :busID="bus.busID"
            :id="bus.busID"
            :uid="bus.cid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from './DeleteBus'
import BusCard from './BusCard'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    DeleteModal,
    BusCard
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('cars').get().then(snapshot => {
        snapshot.forEach(data => {
          this.buses.push({
            cid: data.id,
            busID: data.data().no,
            plate: data.data().license_plate,
            driver: data.data().driver,
            studentGroup: 1
          })
        })
      })
    console.log(this.buses)
  },
  data () {
    return {
      buses: [],
      errMsg: 'ไม่พบข้อมูล',
      tmpDriver: ''
    }
  },
  methods: {
    addToggle () {
      this.isAdd = !this.isAdd
    }
    // setDriverName (duid, cid) {
    //   firebase.firestore().collection('managers').doc(this.$store.state.uid)
    //     .collection('drivers').doc(duid).get().then(data => {
    //       console.log(this.buses.cid)
    //       this.buses.cid = '1'
    //       // console.log(this.buses.cid.driverName)
    //     })
    // }
  }
}
</script>

<style>
.buspanel {
  background: white;
  height: calc(100% - 100pt);
}

.mover-btn {
  background: rgb(242, 108, 37);
  color: white;
  font-size: 13px;
  border-radius: 20px;
  height: 25px;
  padding: 0 20px 0 20px;
}

.mover-btn:hover {
  background: rgb(207, 88, 24);
  color: white;
}

.bus-listview {
  /* background: red; */
  position: relative;
  height: calc(100% - 10vh);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
