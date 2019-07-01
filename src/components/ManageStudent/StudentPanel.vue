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
      <div class="row mr-3">
        <div class="col-12" :key="i.id" v-for="i in student">
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
                <h6 class="thai">{{ i.prefix }}{{ i.fname }} {{ i.lname }}</h6>
                <small v-if="Boolean(i.phone)">Tel {{ i.phone }}</small>
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
export default {
  components: {
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('students').orderBy('fname').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(dataChange => {
          console.log(dataChange.type)
          if (dataChange.type === 'added') {
            this.student.push(dataChange.doc.data())
            this.$router.replace({ path: '/dashboard/student' })
          } else if (dataChange.type === 'removed') {
            const index = this.student.findIndex(item => item.stu_no === dataChange.doc.data().stu_no)
            console.log(index)
            this.student.splice(index, 1)
          } else {
            const index = this.student.findIndex(item => item.stu_no === dataChange.doc.data().stu_no)
            this.student[index] = dataChange.doc.data()
          }
        })
      })
  },
  data () {
    return {
      student: []
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
