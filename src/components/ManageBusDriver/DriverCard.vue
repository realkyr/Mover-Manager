<template>
  <div
    class="row parent-card d-flex justify-content-between align-items-center shadow-sm mt-2 ml-1 p-3 bg-white rounded"
  >
    <div class="row d-flex align-items-center">
      <div class="col-auto image-section">
        <img
          v-if="!pic"
          class="rounded-circle"
          type="image/webp"
          src="../../assets/pics/profile-placeholder.webp"
        />
        <img v-else class="rounded-circle" :src="pic" />
      </div>
      <div class="col-auto">
        <h6 class="thai">
          {{ driverInfo.prefix }}
          {{ driverInfo.fname }} {{ driverInfo.lname }}
        </h6>
        <small v-if="Boolean(driverInfo.uid)">
          {{ driverInfo.uid }}
          <br />
        </small>
        <small>
          <i class="fas fa-mobile-alt mr-2" />
          {{ driverInfo.phone }}
        </small>
      </div>
    </div>
    <router-link
      :to="{name: 'drivers-profile', params: {duid: driver, tmpImg: pic}}"
      tag="button"
      class="btn mover-btn"
    >แก้ไขข้อมูล</router-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
  props: {
    driver: {
      type: String
    },
    driverInfo: {
      type: Object
    }
  },
  mounted () {
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    if ('pic' in this.driverInfo) {
      if (this.driverInfo.pic_link === '') {
        firebase.storage().ref().child(this.driverInfo.pic).getDownloadURL()
          .then(url => {
            this.pic = url
            managerRef.collection('drivers').doc(this.driver).update({
              'pic_link': this.pic
            })
          })
      } else {
        this.pic = this.driverInfo.pic_link
      }
    } else {
      this.pic = null
    }
  },
  data () {
    return {
      pic: null
    }
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
