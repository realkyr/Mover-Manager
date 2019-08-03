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
          {{ studentInfo.prefix }}
          {{ studentInfo.fname }} {{ studentInfo.lname }}
        </h6>
        <small v-if="Boolean(studentInfo.uid)">
          {{ studentInfo.uid }}
          <br />
        </small>
        <small>
          <i class="fas fa-mobile-alt mr-2" />
          {{ studentInfo.phone }}
        </small>
      </div>
    </div>
    <router-link
      :to="{name: 'students-profile', params: {sid: student, tmpImg: pic}}"
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
    student: {
      type: String
    },
    studentInfo: {
      type: Object
    }
  },
  mounted () {
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    managerRef.collection('students').doc(this.student).get()
      .then(data => {
        if (data.data().pic_link === '') {
          if ('pic' in this.studentInfo) {
            firebase.storage().ref().child(this.studentInfo.pic).getDownloadURL()
              .then(url => {
                this.pic = url
                managerRef.collection('students').doc(this.student).update({
                  'pic_link': this.pic
                })
              })
          } else {
            this.pic = null
          }
        } else if (data.data().pic_link !== '') {
          this.pic = data.data().pic_link
        }
      })
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
