<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">รายชื่อกลุ่มนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link to="group/create" tag="button" class="btn mover-btn thai">
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่มกลุ่ม
        </router-link>
      </div>
    </div>
    <div class="bus-listview">
      <div class="row pl-3 pr-3">
        <div class="col rounded d-flex flex-column">
          <div class>ช่วงเช้า</div>
          <div :key="group" v-for="group in Object.keys(studentGroups1)">
            <GroupCard
              :students="studentGroups1[group].students"
              :groupName="studentGroups1[group].name"
              :group="group"
            />
          </div>
        </div>
        <div class="vl"></div>
        <div class="col rounded d-flex flex-column">
          ช่วงบ่าย
          <div :key="group" v-for="group in Object.keys(studentGroups2)">
            <GroupCard
              :students="studentGroups2[group].students"
              :groupName="studentGroups2[group].name"
              :group="group"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupCard from './StudentGroupCard'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    GroupCard
  },
  mounted () {
    // ดึงข้อมูลกลุ่มนักเรียนช่วงเช้า
    firebase
      .firestore()
      .collection('managers')
      .doc(this.$store.state.uid)
      .collection('student-groups')
      .where('section', '==', 'เช้า')
      .get()
      .then(data => {
        let stdGroups = {}
        data.forEach(data => {
          stdGroups[data.id] = data.data()
        })
        this.studentGroups1 = stdGroups
      })
    // ดึงข้อมูลกลุ่มนักเรียนช่วงบ่าย
    firebase
      .firestore()
      .collection('managers')
      .doc(this.$store.state.uid)
      .collection('student-groups')
      .where('section', '==', 'บ่าย')
      .get()
      .then(data => {
        let stdGroups = {}
        data.forEach(data => {
          stdGroups[data.id] = data.data()
        })
        this.studentGroups2 = stdGroups
      })
  },
  data () {
    return {
      studentGroups1: {},
      studentGroups2: {}
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
