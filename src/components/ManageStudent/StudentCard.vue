<template>
  <div
    class="row parent-card d-flex justify-content-between align-items-center shadow-sm mt-2 ml-1 pt-2 pb-2 pl-3 pr-3 bg-white rounded"
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
    <div class="d-flex justify-content-center flex-column">
      <router-link
        :to="{name: 'students-profile', params: {sid: student, tmpImg: pic}}"
        tag="button"
        class="btn mover-btn"
        >แก้ไขข้อมูล</router-link>
      <div v-if="qrImg === null" class="myQr mt-1"></div>
      <div class="myQr mt-1" v-else>
        <img :src="qrImg">
      </div>
    </div>
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
    this.getQr(this.$store.state.students[this.student])
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    if ('pic' in this.studentInfo) {
      if (this.studentInfo.pic_link === '') {
        firebase.storage().ref().child(this.studentInfo.pic).getDownloadURL()
          .then(url => {
            this.pic = url
            managerRef.collection('students').doc(this.student).update({
              'pic_link': this.pic
            })
          })
      } else {
        this.pic = this.studentInfo.pic_link
      }
    } else {
      this.pic = null
    }
    this.onGetQr = managerRef.collection('students').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'modified' && this.student === change.doc.id) {
          this.getQr(change.doc.data())
        }
      })
    })
  },
  data () {
    return {
      pic: null,
      qrImg: null
    }
  },
  methods: {
    getQr (data) {
      if ('url' in data) {
        firebase.storage().ref().child(data.url).getDownloadURL()
          .then(url => {
            this.qrImg = url
          })
      }
    }
  },
  beforeDestroy () {
    this.onGetQr()
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

.myQr {
  width: 136px;
  height: 136px;
  background: white;
}

.myQr img {
  width: 136px;
  height: 136px;
}
</style>
