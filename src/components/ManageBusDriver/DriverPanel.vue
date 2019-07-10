<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คนขับรถ</h3>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="Object.keys($store.state.drivers).length === 0">{{ errMsg }}</span>
      <div class="row mr-3">
        <div class="col-12" :key="driver" v-for="driver in Object.keys($store.state.drivers)">
          <DriverCard
            :driver="driver"
            :driverInfo="$store.state.drivers[driver]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
import DriverCard from './DriverCard'
export default {
  components: {
    DriverCard
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('drivers').orderBy('fname').get()
      .then(snapshot => {
        let tmpDrivers = {}
        snapshot.forEach(data => {
          tmpDrivers[data.id] = data.data()
        })
        this.setDrivers(tmpDrivers)
      })
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล'
    }
  },
  methods: {
    ...mapActions(['setDrivers'])
  }
}
</script>
