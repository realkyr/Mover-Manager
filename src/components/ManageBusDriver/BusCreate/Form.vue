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
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="addBus">บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
export default {
  mounted () {
    let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
    managerRef
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
    ...mapActions(['setGroups']),
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
            driver: '',
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
        this.busId === ''
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
