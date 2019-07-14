<template>
  <div class="bus-card rounded mb-3">
    <!-- show this if not edit -->
    <div class="row d-flex align-items-center justify-content-between">
      <div class="col-auto">
        ชื่อกลุ่ม : {{ groupName }}
      </div>
      <div class="col-auto">
        <button
          class="btn mover-btn thai"
          @click="toUpdate"
        >
          แก้ไข
        </button>
        <button
          v-if="!isView"
          class="btn mover-btn thai ml-1"
          @click="viewToggle"
        >
          ดูรายชื่อ
        </button>
        <button
          v-else
          class="btn mover-btn thai ml-1"
          @click="viewToggle"
        >
          ยกเลิก
        </button>
      </div>
    </div>
    <div v-if="isView" class="row bus-card rounded m-2">
      <div class="col">
        <div
          class="custom-control custom-checkbox"
          :key="student"
          v-for="student in Object.keys(studentNames)"
        >
          {{ studentNames[student] }}
          <!-- <input type="checkbox" class="custom-control-input" :id="`${student}`">
          <label class="custom-control-label" :for="`${student}`">
            {{ studentNames[student] }}
          </label> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  props: {
    groupName: {
      type: String,
      default: ''
    },
    students: {
      type: Array,
      default: undefined
    },
    group: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isView: false,
      studentNames: {}
    }
  },
  mounted () {
    this.students.forEach(sid => {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('students').doc(sid).get().then(data => {
          this.studentNames[sid] = data.data().prefix + data.data().fname + ' ' + data.data().lname
        })
      // this.studentNames[data.sid] = data.name
    })
    console.log(this.studentNames)
  },
  methods: {
    viewToggle () {
      this.isView = !this.isView
    },
    toUpdate () {
      this.$router.push({ name: 'groups-updating-console', params: { groupId: this.group } })
    }
  }
}
</script>

<style>
  .bus-card {
    padding: 1em;
    border: 0.5pt solid rgb(236, 235, 243);
    background: white;
  }

  .edit-btn {
    border: 0.5pt solid rgb(236, 235, 243);
    border-radius: 15px;
  }

  .edit-btn i {
    color: rgb(242, 108, 37);
  }

  .del-btn {
    border: 0.5pt solid rgb(236, 235, 243);
    border-radius: 15px;
  }

  .del-btn {
    color: rgb(229, 23, 23);
  }

  .save-btn {
    border: 0.5pt solid rgb(236, 235, 243);
    border-radius: 15px;
  }

  .save-btn i {
    color: #28a745;
  }

  .edit-section {
    width: 246.86px;
  }
</style>
