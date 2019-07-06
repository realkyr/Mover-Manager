<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คนขับรถ</h3>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="Object.keys($store.state.drivers).length === 0">{{ errMsg }}</span>
      <div v-else class="row mr-3">
        <div class="col-12" :key="driver" v-for="(driver, index) in Object.keys($store.state.drivers)">
          <div
            class="row parent-card d-flex justify-content-between align-items-center shadow-sm mt-2 ml-1 p-3 bg-white rounded"
          >
            <div class="row d-flex align-items-center">
              <div class="col-auto image-section">
                <img
                  v-if="!$store.state.tmpPicDriver[driver]"
                  class="rounded-circle"
                  type="image/webp"
                  src="../../assets/pics/profile-placeholder.webp"
                />
                <img
                  class="rounded-circle"
                  :src="$store.state.tmpPicDriver[driver]"
                />
              </div>
              <div class="col-auto">
                <h6 class="thai">
                  {{$store.state.drivers[driver].prefix}}
                  {{ $store.state.drivers[driver].fname }} {{ $store.state.drivers[driver].lname }}
                </h6>
                <small v-if="Boolean($store.state.drivers[driver].uid)">
                  {{ $store.state.drivers[driver].uid }}
                  <br />
                </small>
                <small>
                  <i class="fas fa-mobile-alt mr-2" />{{ $store.state.drivers[driver].phone }}
                </small>
              </div>
            </div>
            <router-link
              :to="{name: 'drivers-profile', params: {duid: driver, index: index}}"
              tag="button"
              class="btn mover-btn"
            >แก้ไขข้อมูล</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
import { setTimeout } from 'timers'
export default {
  mounted () {
    firebase
      .firestore()
      .collection('managers')
      .doc(this.$store.state.uid)
      .collection('drivers')
      .orderBy('fname')
      .get()
      .then(snapshot => {
        let pics = {}
        snapshot.forEach(data => {
          this.drivers[data.id] = data.data()
          if ('pic' in data.data()) {
            firebase.storage().ref().child(this.drivers[data.id].pic)
              .getDownloadURL()
              .then(url => {
                pics[data.id] = url
              })
          } else {
            pics[data.id] = null
          }
        })
        this.setDrivers(this.drivers)
        setTimeout(() => {
          this.setPicsDriver(pics)
        }, 1000)
      })
  },
  data () {
    return {
      drivers: {},
      errMsg: 'ไม่พบข้อมูล',
      pic: {}
    }
  },
  methods: {
    ...mapActions(['setDrivers', 'setPicsDriver'])
  }
}
</script>

<style scoped>
.image-section {
  width: 150px;
  height: 120px;
}
.image-section img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

i {
  width: 10px;
}
</style>
