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
      <span v-if="filteredStd.length === 0">{{ errMsg }}</span>
      <div v-else class="row mr-3">
        <div class="col-12" :key="student" v-for="student in filteredStd">
          <StudentCard
            ref="stdcard"
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
    let tmpStudents = {}
    this.onStudent = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('students').orderBy('fname').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            snapshot.docs.forEach(data => {
              tmpStudents[data.id] = data.data()
            })
          } else if (change.type === 'removed') {
            snapshot.docs.forEach(data => {
              tmpStudents[data.id] = data.data()
            })
          }
        })
        this.setStudents(tmpStudents)
      })
  },
  data () {
    return {
      errMsg: 'ไม่พบข้อมูล',
      inputStd: '',
      idx: -1
    }
  },
  computed: {
    filteredStd () {
      let filtered = []
      if (this.inputStd === '' || !this.inputStd.trim().length) {
        filtered = Object.keys(this.$store.state.students)
      } else {
        const entries = Object.entries(this.$store.state.students)
        for (const [sid, info] of entries) {
          let name = info.fname + ' ' + info.lname
          if (name.includes(this.inputStd) && this.inputStd.length >= 1) {
            filtered.push(sid)
          }
        }
      }
      return filtered
    }
  },
  methods: {
    ...mapActions(['setStudents']),
    onGetQr () {
      this.$refs.stdcard.getQr()
    },
    onFocusStd (name) {
      console.log(name)
    },
    onListenStd (input) {
      this.inputStd = input
      // if (input === 'delete' && this.idx === -1) {
      //   this.inputStd = this.inputStd.slice(0, this.idx)
      // } else if (input === 'delete' && this.idx !== -1) {
      //   const position = this.inputStd.length + this.idx
      //   this.inputStd = this.inputStd.slice(0, position) +
      //     this.inputStd.slice(position + 1)
      // } else {
      //   this.inputStd += input
      // }
    }
    // onListenIndex (valueIdx) {
    //   if (valueIdx === -1 && this.inputStd.length + this.idx >= 0) {
    //     this.idx += valueIdx
    //   } else if (valueIdx === 1 && this.inputStd.length + this.idx !== this.inputStd.length - 1) {
    //     this.idx += valueIdx
    //   }
    // }
  },
  beforeDestroy () {
    this.onStudent()
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
