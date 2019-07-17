<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">เช็คชื่อนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link to="/dashboard/bus" tag="button" class="btn mover-btn thai">
          <i style="color: white;" class="fas fa-backward mr-1"></i>ย้อนกลับ
        </router-link>
      </div>
    </div>
    <div class="bus-listview">
      <span v-if="Object.keys(students).length === 0">{{ errMsg }}</span>
      <div class="row mr-3">
        <div class="col-12" :key="student" v-for="student in students">
          <StudentCheckCard
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
import StudentCheckCard from '../ManageBusDriver/StudentCheckCard'
import { mapActions } from 'vuex'
import moment from 'moment'
export default {
  components: {
    StudentCheckCard
  },
  mounted () {
    // ดึงข้อมูลนักเรียนทั้งหมดมา อ้างอิงจาก bus
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    if ('groupId' in this.$route.params) {
      managerRef.collection('student-groups').doc(this.$route.params.groupId).get()
        .then(data => {
          this.students = data.data().students
        })
      managerRef.collection('student-groups').doc(this.$route.params.groupId)
        .collection('checklist').get()
        .then(docs => {
          if (docs.size === 0) {
            let tmpStudents = {}
            this.students.forEach(sid => {
              tmpStudents[sid] = 0
            })
            managerRef.collection('student-groups').doc(this.$route.params.groupId)
              .collection('checklist').doc(moment().format('YYMMDD')).set(tmpStudents)
          } else {
            let tmpStudents = {}
            this.students.forEach(sid => {
              tmpStudents[sid] = 0
            })
            // console.log(docs.)
            // if (this.checkDocs(docs)) {

            // }
            docs.forEach(data => {
              if (data.id !== moment().format('YYMMDD')) {
                managerRef.collection('student-groups').doc(this.$route.params.groupId)
                  .collection('checklist').doc(data.id).delete()
                  .then(() => {
                    managerRef.collection('student-groups').doc(this.$route.params.groupId)
                      .collection('checklist').doc(moment().format('YYMMDD')).set(tmpStudents)
                  })
              }
            })
          }
        })
    } else {
      this.$router.replace({ path: '/dashboard/bus' })
    }
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล',
      students: []
    }
  },
  methods: {
    ...mapActions(['setStudents']),
    checkDocs (doc) {
      doc.forEach(data => {
        if (data.id !== moment().format('YYMMDD')) {
          return true
        } else {
          console.log('3')
        }
      })
    }
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
