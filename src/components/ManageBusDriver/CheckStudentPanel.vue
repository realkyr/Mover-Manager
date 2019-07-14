<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">เช็คชื่อนักเรียน</h3>
      </div>
      <!-- <div class="col-auto">
        <router-link
          to="/dashboard/student/create"
          tag="button"
          class="btn mover-btn thai"
        >
          <i style="color: white;" class="fas fa-plus mr-1"></i>เช็คชื่อนักเรียน
        </router-link>
      </div> -->
    </div>
    <div class="bus-listview">
      <!-- <span v-if="Object.keys($store.state.students).length === 0">{{ errMsg }}</span> -->
      <div class="row mr-3">
        <div class="col-12" :key="student" v-for="student in Object.keys((studentNames))">
          <!-- {{studentNames[student]}} -->
          <StudentCheckCard
            :studentName="studentNames[student]"
            :studentInfo="students[student]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import StudentCheckCard from '../ManageBusDriver/StudentCheckCard'
import { mapActions } from 'vuex'
import { setTimeout } from 'timers'
export default {
  components: {
    StudentCheckCard
  },
  mounted () {
    // ดึงข้อมูลนักเรียนทั้งหมดมา อ้างอิงจาก bus
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('student-groups').doc(this.$route.params.groupId).get()
      .then(data => {
        let students = data.data().students
        students.forEach(sid => {
          firebase.firestore().collection('managers').doc(this.$store.state.uid)
            .collection('students').doc(sid).get().then(info => {
              this.studentNames[sid] = info.data().prefix + info.data().fname + ' ' + info.data().lname
            })
          // this.studentNames[sid] = this.$store.state.students[sid].prefix + this.$store.state.students[sid].fname + ' ' + this.$store.state.students[sid].lname
        })
      })
    setTimeout(() => {
      console.log(this.studentNames)
    }, 2000)
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล',
      studentNames: {},
      students: this.$store.state.students
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
