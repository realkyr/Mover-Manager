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
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" :id="student" v-model="isCheck" @change="onCheck">
      <label class="custom-control-label" :for="student">{{ checkState }}</label>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import moment from 'moment'
export default {
  props: {
    studentInfo: {
      type: Object
    },
    student: {
      type: String
    }
  },
  mounted () {
    // check field 'pic' in student
    if ('pic' in this.studentInfo) {
      firebase
        .storage()
        .ref()
        .child(this.studentInfo.pic)
        .getDownloadURL()
        .then(url => {
          this.pic = url
        })
    } else {
      this.pic = null
    }
    // get realtime firestore for get info check student
    this.onListener = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('student-groups').doc(this.$route.params.groupId)
      .collection('checklist').doc(moment().format('YYMMDD')).onSnapshot(data => {
        try {
          this.isCheck = data.data()[this.student]
          if (this.isCheck === 1) {
            this.checkState = 'ขึ้นรถแล้ว'
          } else {
            this.checkState = 'ยังไม่ขึ้น'
          }
        } catch (err) {
        }
      })
    // .collection('checklist').onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     if (change.type === 'added') {
    //       this.isCheck = change.doc.data()[this.student]
    //       if (this.isCheck === 1) {
    //         this.checkState = 'ขึ้นรถแล้ว'
    //       } else {
    //         this.checkState = 'ยังไม่ขึ้น'
    //       }
    //     } else if (change.type === 'modified') {
    //       this.isCheck = change.doc.data()[this.student]
    //       if (this.isCheck === 1) {
    //         this.checkState = 'ขึ้นรถแล้ว'
    //       } else {
    //         this.checkState = 'ยังไม่ขึ้น'
    //       }
    //     }
    //   })
    // })
  },
  data () {
    return {
      pic: null,
      isCheck: 0,
      checkState: ''
    }
  },
  methods: {
    onCheck () {
      let tmpCheck = {}
      if (this.isCheck) {
        let check = 1
        tmpCheck[this.student] = check
        this.checkState = 'ขึ้นรถแล้ว'
      } else {
        let check = 0
        tmpCheck[this.student] = check
        this.checkState = 'ยังไม่ขึ้น'
      }
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('student-groups').doc(this.$route.params.groupId)
        .collection('checklist').doc(moment().format('YYMMDD')).update(tmpCheck)
    }
  },
  beforeDestroy () {
    this.onListener()
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
