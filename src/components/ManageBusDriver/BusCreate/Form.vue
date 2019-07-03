<template>
  <form>
    <div class="form-group">
      <label for="busid">Bus ID | รหัสของรถ</label>
      <input type="text" class="form-control" id="busid" placeholder="SBUS A1" v-model="busId">
    </div>
    <div class="form-group">
      <label for="plate">License Plate | ทะเบียนรถ</label>
      <input type="text" class="form-control" id="plate" placeholder="กก 1103" v-model="license">
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกคนขับรถ
        <button class="btn mover-btn thai">&#43; เพิ่มคนขับ</button>
      </label>
      <select class="custom-select mr-sm-2" id="driver" v-model="driver">
        <option value="">เลือกคนขับ...</option>
        <option
          v-for="option in drivers"
          :key="option.duid"
          :value="option.duid">{{ option.data.prefix }}{{ option.data.fname }} {{ option.data.lname }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกกลุ่มนักเรียน
        <button class="btn mover-btn thai">&#43; เพิ่มกลุ่ม</button>
      </label>
      <select class="custom-select mr-sm-2" id="driver" v-model="groupStudent">
        <option value="">เลือกกลุ่มนักเรียน...</option>
        <option value="1">1 เช้า</option>
        <option value="2">1 บ่าย</option>
      </select>
    </div>
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="addBus">บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('drivers').get()
      .then(snapshot => {
        snapshot.forEach(data => {
          this.drivers.push({
            duid: data.id,
            data: data.data()
          })
        })
        console.log(this.drivers)
      })
  },
  data () {
    return {
      busId: '',
      license: '',
      driver: '',
      groupStudent: '',
      drivers: []
    }
  },
  methods: {
    addBus () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('cars').add({
          license_plate: this.license,
          no: this.busId,
          driver: this.driver,
          students: [],
          current_location: {
            lat: 1,
            lng: 1
          }
        })
      this.$router.replace({ path: '/dashboard/bus' })
    }
  }
}
</script>

<style scoped>
#add-btn {
  width: 10rem;
  height: 2rem;
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%
  )
}
</style>
