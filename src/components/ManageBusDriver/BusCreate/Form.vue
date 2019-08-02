<template>
  <form>
    <small v-show="errMsg" style="color:red;font-size:12pt" class="alert-text thai">{{ errMsg }}</small>
    <div class="form-group">
      <label for="busid">Bus ID | รหัสของรถ</label>
      <input type="text" class="form-control" id="busid" placeholder="SBUS A1" v-model="busId" @input="clearErr"/>
    </div>
    <div class="form-group">
      <label for="plate">License Plate | ทะเบียนรถ</label>
      <input type="text" class="form-control" id="plate" placeholder="กก 1103" v-model="license" @input="clearErr"/>
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกคนขับรถ
        <!-- <button class="btn mover-btn thai">&#43; เพิ่มคนขับ</button> -->
      </label>
      <select class="custom-select mr-sm-2" id="driver" v-model="driver" @change="clearErr">
        <option value>เลือกคนขับ...</option>
        <option
          v-for="option in drivers"
          :key="option.duid"
          :value="option.duid"
        >{{ option.data.prefix }}{{ option.data.fname }} {{ option.data.lname }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="driver">
        เลือกกลุ่มนักเรียน
        <!-- <button class="btn mover-btn thai">&#43; เพิ่มกลุ่ม</button> -->
      </label>
      <select class="custom-select mr-sm-2" id="driver" v-model="groupStudent" @change="clearErr">
        <option value>เลือกกลุ่มนักเรียน...</option>
        <option
          v-for="group in Object.keys($route.params)"
          :key="group"
          :value="group"
        >{{ $route.params[group].name }}</option>
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
    firebase
      .firestore()
      .collection('managers')
      .doc(this.$store.state.uid)
      .collection('drivers')
      .get()
      .then(snapshot => {
        snapshot.forEach(data => {
          this.drivers.push({
            duid: data.id,
            data: data.data()
          })
        })
      })
  },
  data () {
    return {
      busId: '',
      license: '',
      driver: '',
      groupStudent: '',
      drivers: [],
      position: {},
      errMsg: ''
    }
  },
  methods: {
    // ...mapActions('setBuses'),
    addBus () {
      if (this.validate()) {
        let managersRef = firebase
          .firestore()
          .collection('managers')
          .doc(this.$store.state.uid)
        managersRef
          .collection('cars')
          .add({
            license_plate: this.license,
            no: this.busId,
            driver: this.driver,
            student_group: this.groupStudent,
            current_location: this.position
          })
          .then(() => {
            this.$router.replace({ path: '/dashboard/bus' })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.errMsg = '** โปรดกรอกข้อมูลให้ครบถ้วน'
      }
    },
    validate () {
      if (
        this.license === '' ||
        this.busId === '' ||
        this.driver === '' ||
        this.groupStudent === '' ||
        this.phone === ''
      ) {
        return false
      } else {
        return true
      }
    },
    clearErr () {
      this.errMsg = ''
    }
  }
}
</script>

<style scoped>
#add-btn {
  width: 10rem;
  height: 2rem;
  background: linear-gradient(180deg, rgba(33, 149, 186, 1) 0%);
}
</style>
