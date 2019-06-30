<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">รายชื่อกลุ่มนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link
          to="group/create"
          tag="button"
          class="btn mover-btn thai"
        >
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่มกลุ่ม
        </router-link>
      </div>
    </div>
    <div class="row pl-3 pr-3">
      <div class="col rounded d-flex flex-column">
        <div class="">ช่วงเช้า</div>
        <div :key="group" v-for="group in Object.keys(groups1)">
          <GroupCard
            :students="groups1[group].students"
            :groupName="groups1[group].groupName"
          />
        </div>
      </div>
      <div class="vl"></div>
      <div class="col rounded d-flex flex-column">
        ช่วงบ่าย
        <div :key="group" v-for="group in Object.keys(groups2)">
          <GroupCard
            :students="groups2[group].students"
            :groupName="groups2[group].groupName"
          />
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
    firebase.firestore()
      .collection('managers').doc('ibBG5FJieVVVIP9kr0duJa3OFtA3')
      .collection('students').get()
      .then(data => {
        data.forEach(data => {
          console.log(data.id)
          this.groups1.A1.students.push(data.data())
        })
      })
  },
  data () {
    return {
      groups1: {
        // all buses information goes here
        A1: {
          groupName: 'กลุ่มแรก',
          students: []
        },
        A2: {
          groupName: 'กลุ่มสอง',
          students: [
            'PeBvsKZMI0PoZyW2nDhc',
            'dA2YtILBkcqAr0aDagvp'
          ]
        }
      },
      groups2: {
        // all buses information goes here
        A1: {
          groupName: 'กลุ่มแรก',
          students: [
            '438hMEpFGmcVJN28soRt',
            '8VBmM8uUyhwdWEWnPUOf'
          ]
        }
      }
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
