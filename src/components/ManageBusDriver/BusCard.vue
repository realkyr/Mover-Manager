<template>
  <div class="bus-card rounded mb-3">
    <div>
      <span>
        {{ busID }} | {{ plate }}
        <button
          v-if="!edit"
          class="btn edit-btn thai ml-3"
          @click="editToggle"
        >
          <i class="far fa-edit"/>
        </button>
        <button v-if="edit" @click="editToggle" class="btn del-btn thai ml-3">
          <i class="fas fa-times" />
        </button>
        <button data-toggle="modal" :data-target="`#${bus}`" class="btn del-btn thai ml-1">
          <i class="far fa-trash-alt"/>
        </button>
      </span>
    </div>
    <!-- show this if not edit -->
    <div v-if="!edit">คนขับ :
      {{ driverName }}
    </div>
    <div v-if="!edit">กลุ่มนักเรียน : {{ studentGroup }}</div>
    <!-- edit section -->
    <div v-if="edit" class="edit-section">
      <div class="form-group">
        คนขับ :
        <select class="custom-select mr-sm-2" id="bus-card-driver" v-model="driverSelect">
          <option
            v-for="option in Object.keys($store.state.drivers)"
            :key="option"
            :value="option">{{ $store.state.drivers[option].prefix }}{{ $store.state.drivers[option].fname }} {{ $store.state.drivers[option].lname }}
          </option>
        </select>
      </div>
      <div class="form-group">
        กลุ่มนักเรียน :
        <select class="custom-select mr-sm-2" id="bus-card-student-group">
          <option selected>เลือกกลุ่ม...</option>
          <option value="1">1 เช้า</option>
          <option value="2">1 บ่าย</option>
        </select>
      </div>
      <router-link to="/" tag="a" class="thai">แก้ไขโดยละเอียด</router-link>
      <button style="float: right;" @click="updateBus" class="btn btn-success">บันทึก</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
export default {
  props: {
    busID: {
      type: String,
      default: ''
    },
    plate: {
      type: String,
      default: ''
    },
    driver: {
      type: String,
      default: ''
    },
    studentGroup: {
      type: Number,
      default: 0
    },
    bus: {
      type: String,
      default: ''
    }
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('drivers').doc(this.driver).get()
      .then(data => {
        this.driverName = data.data().prefix + data.data().fname + ' ' + data.data().lname
      })
  },
  data () {
    return {
      edit: false,
      driverSelect: this.driver,
      driverName: ''
    }
  },
  methods: {
    ...mapActions(['updateDriverBus']),
    editToggle () {
      this.edit = !this.edit
    },
    updateBus () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('cars').doc(this.bus).update({
          'driver': this.driverSelect
        }).then(() => {
          firebase.firestore().collection('managers').doc(this.$store.state.uid)
            .collection('drivers').doc(this.driverSelect).get()
            .then(data => {
              this.updateDriverBus({
                bid: this.bus,
                data: data.data()
              })
              this.driverName = data.data().prefix + data.data().fname + ' ' + data.data().lname
            })
          this.edit = !this.edit
        })
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
