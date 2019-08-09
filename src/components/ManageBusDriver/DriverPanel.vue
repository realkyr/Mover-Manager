<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คนขับรถ</h3>
      </div>
      <div class="col-auto">
        <button class="btn mover-btn thai" @click="showModal">
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่มคนขับ
        </button>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="filteredDriver.length === 0">{{ errMsg }}</span>
      <div v-else class="row mr-3">
        <div class="col-12" :key="driver" v-for="driver in filteredDriver">
          <DriverCard
            :driver="driver"
            :driverInfo="$store.state.drivers[driver]"
          />
        </div>
      </div>
    </div>
    <QrModal ref="modal"/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
import DriverCard from './DriverCard'
import QrModal from '../Profile/QrModal'
export default {
  components: {
    DriverCard,
    QrModal
  },
  mounted () {
    let tmpDrivers = {}
    this.onDriver = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('drivers').orderBy('fname').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            snapshot.docs.forEach(data => {
              tmpDrivers[data.id] = data.data()
            })
            this.closeModal()
          }
        })
        this.setDrivers(tmpDrivers)
      })
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล',
      inputDriver: ''
    }
  },
  computed: {
    filteredDriver () {
      let filtered = []
      if (this.inputDriver === '' || !this.inputDriver.trim().length) {
        filtered = Object.keys(this.$store.state.drivers)
      } else {
        const entries = Object.entries(this.$store.state.drivers)
        for (const [duid, info] of entries) {
          let name = info.fname + ' ' + info.lname
          if (name.includes(this.inputDriver) && this.inputDriver.length >= 1) {
            filtered.push(duid)
          }
        }
      }
      return filtered
    }
  },
  methods: {
    ...mapActions(['setDrivers']),
    showModal () {
      let element = this.$refs.modal.$el
      // eslint-disable-next-line no-undef
      $(element).modal('show')
    },
    closeModal () {
      let element = this.$refs.modal.$el
      // eslint-disable-next-line no-undef
      $(element).modal('hide')
    },
    onListenDriver (input) {
      this.inputDriver = input
    }
  },
  beforeDestroy () {
    this.onDriver()
  }
}
</script>
