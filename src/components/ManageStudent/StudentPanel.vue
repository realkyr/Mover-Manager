<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">รายชื่อนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link
          to="student/create"
          tag="button"
          class="btn mover-btn thai"
        >
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่มนักเรียน
        </router-link>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="Object.keys($store.state.students).length === 0">{{ errMsg }}</span>
      <div v-else class="row mr-3">
        <div ref="test" class="col-12" :key="student" v-for="student in Object.keys(($store.state.students))">
          <div
            class="row parent-card d-flex justify-content-between align-items-center shadow-sm mt-2 ml-1 p-3 bg-white rounded"
          >
            <div class="row d-flex align-items-center">
              <div class="col-auto">
                <img
                  class="rounded-circle"
                  type="image/webp"
                  src="../../assets/pics/profile-placeholder.webp"
                >
              </div>
              <div class="col-auto">
                <h6 class="thai">{{ $store.state.students[student].prefix }}{{ $store.state.students[student].fname }} {{ $store.state.students[student].lname }}</h6>
                <small v-if="Boolean($store.state.students[student].phone)">Tel {{ $store.state.students[student].phone }}</small>
              </div>
            </div>
            <button class="btn mover-btn">ดูข้อมูล</button>
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
export default {
  components: {
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('students').orderBy('fname').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(dataChange => {
          console.log(dataChange.type)
          if (dataChange.type === 'added') {
            this.students[dataChange.doc.id] = dataChange.doc.data()
            this.$router.replace({ path: '/dashboard/student' })
          } else if (dataChange.type === 'removed') {

          } else {

          }
        })
        this.setStudents(this.students)
        this.isPanning = false
      })
  },
  data () {
    return {
      students: {},
      errMsg: 'ไม่พบข้อมูล',
      isPanning: true
    }
  },
  methods: {
    ...mapActions(['setStudents'])
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

h6 {
  margin-bottom: 1px;
}

small {
  font-style: italic;
}
</style>
