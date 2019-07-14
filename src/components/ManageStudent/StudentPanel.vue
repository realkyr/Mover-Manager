<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">รายชื่อนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link
          to="/dashboard/student/create"
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
        <div class="col-12" :key="student" v-for="student in Object.keys(($store.state.students))">
          <StudentCard
            :student="student"
            :studentInfo="$store.state.students[student]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import StudentCard from './StudentCard'
import { mapActions } from 'vuex'
export default {
  components: {
    StudentCard
  },
  mounted () {
    // ดึงข้อมูลนักเรียนทั้งหมดมา โดยเรียงตามชื่อ
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('students').orderBy('fname').get()
      .then(snapshot => {
        let tmpStudents = {}
        snapshot.forEach(data => {
          tmpStudents[data.id] = data.data()
        })
        this.setStudents(tmpStudents)
      })
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล'
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
