<template>
  <div class="popup">
    <div class="businfo">
      {{businfo.no}} | <span class="thai plate">{{businfo.license_plate}}</span>
    </div>
    <div class="driverinfo">
      <div class="thai label">
        <driver width="10" height="10" class="labelicon"/>
        คนขับรถ
      </div>
      <span class="thai info">{{ driverName }}</span>
      <div class="thai label">
        <telephone width="9" height="9" class="labelicon"/>
        เบอร์โทรศัพท์
      </div>
      <span class="thai info">{{ driverTel }}</span>
    </div>
    <div class="studentleft">
      <span id="remain">3</span>
      <span id="max">/50</span><br />
      <span class="thai label">นักเรียนที่เหลือ</span>
    </div>
  </div>
</template>

<script>
import telephone from './icons/telephone.vue'
import driver from './icons/driver.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    telephone,
    driver
  },
  props: {
    businfo: Object
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('drivers').doc(this.businfo.driver).get()
      .then(data => {
        this.driverName = data.data().prefix + data.data().fname + ' ' + data.data().lname
        this.driverTel = data.data().phone
      })
  },
  data () {
    return {
      driverName: '',
      driverTel: ''
    }
  }
}
</script>

<style scope>
.plate {
  color: rgb(125, 135, 151)
}
.popup {
  background: #fff;
  position: absolute;
  border-radius: 15px;
  width: 25em;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
}

.businfo {
  border-bottom: 0.5pt solid rgb(236, 235, 243);
  border-right: 0.5pt solid rgb(236, 235, 243);
  width: 140px;
  padding: 1em 0 1em 1em;
  font-size: 8pt;
}

.driverinfo {
  width: 140px;
  padding: 1em;
  border-right: 0.5pt solid rgb(236, 235, 243);
  line-height: 1.5em;
}

.label {
  color: rgb(204, 209, 218);
}

.label:nth-child(2) {
  margin-top: 4px;
}

.studentleft {
  position: absolute;
  font-size: 2em;
  top: 0;
  right: 0;
  transform: translate(-50%, 70%) ;
}

.info {
  font-size: 10pt;
}

#max {
  font-size: 12pt;
}

#remain {
  font-size: 20pt;
}

.studentleft {
  text-align: center;
}

.studentleft .label {
  font-size: 8pt;
  margin: 0;
  text-align: center;
}

.labelicon {
  height: 8pt;
  width: 8pt;
  display: inline-block;
}

.labelicon path {
  fill: rgb(204, 209, 218);
}
</style>
