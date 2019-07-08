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
      <span v-if="Object.keys($store.state.buses).length === 0">{{ errMsg }}</span>
      <div v-else class="row">
        <div class="col-auto" :key="bus" v-for="bus in Object.keys($store.state.buses)">
          <BusCard
            :bus="bus"
            :busID="$store.state.buses[bus].no"
            :plate="$store.state.buses[bus].license_plate"
            :driver="$store.state.buses[bus].driver"
            :studentGroup="$store.state.buses[bus].studentGroup"
          />
          <DeleteModal
            :plate="$store.state.buses[bus].plate"
            :busID="$store.state.buses[bus].no"
            :id="bus"
            :uid="bus"
            @onDelete="getCurrentBuses"
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
import { mapActions } from 'vuex'
export default {
  components: {
    DeleteModal,
    BusCard
  },
  mounted () {
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    managerRef.collection('cars').orderBy('no').get().then(snapshot => {
      snapshot.forEach(data => {
        this.buses[data.id] = data.data()
      })
      this.setBuses(this.buses)
    })
    managerRef.collection('drivers').orderBy('fname').get().then(snapshot => {
      snapshot.forEach(data => {
        this.drivers[data.id] = data.data()
      })
      this.setDrivers(this.drivers)
    })
  },
  data () {
    return {
      buses: {},
      errMsg: 'ไม่พบข้อมูล',
      tmpDriver: '',
      drivers: {}
    }
  },
  methods: {
    ...mapActions(['setBuses', 'setDrivers']),
    addToggle () {
      this.isAdd = !this.isAdd
    },
    getCurrentBuses (value) {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('cars').orderBy('no').get().then(snapshot => {
          let currentBuses = {}
          snapshot.forEach(data => {
            currentBuses[data.id] = data.data()
          })
          this.setBuses(currentBuses)
          // this.buses = this.$store.state.buses
        })
    }
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
