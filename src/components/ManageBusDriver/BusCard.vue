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
    <div class="mt-2" v-if="!edit">คนขับ :
      <span v-if="driverSelect === ''">
        <button v-if="!showQr" @click="showToggle" class="btn mover-btn thai ml-3">
          <i class="fas fa-qrcode" /> check in คนขับ
        </button>
        <button v-if="showQr" @click="showToggle" class="btn mover-btn thai ml-3">
          <i class="fas fa-times" /> ซ่อน QR Code
        </button>
        <div v-if="showQr">
          <div v-if="qrImg === null" class="myQr mt-1"></div>
          <div class="myQr mt-1" v-else>
            <img :src="qrImg">
          </div>
        </div>
      </span>
      <span v-else> {{ driverName }} </span>
    </div>
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
      <router-link :to="{ name:'check-student-console', params: {driverId: driver} }" tag="a" class="thai">เช็คชื่อนักเรียน</router-link>
      <button style="float: right;" @click="updateBus" class="btn mover-btn">บันทึก</button>
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
      type: String
    },
    plate: {
      type: String,
      default: ''
    },
    driver: {
      type: String,
      default: ''
    },
    bus: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.getQr(this.$store.state.buses[this.bus])
    if (this.driver !== '') {
      this.driverName = this.$store.state.drivers[this.driver].prefix +
      this.$store.state.drivers[this.driver].fname + ' ' + this.$store.state.drivers[this.driver].lname
    }
    this.onGetQr = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('cars').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'modified' && this.bus === change.doc.id) {
            this.getQr(change.doc.data())
            if (change.doc.data().driver !== '') {
              this.driverSelect = change.doc.data().driver
              this.updateBus()
            } else {
              this.driverSelect = ''
              this.driverName = ''
            }
          }
        })
      })
  },
  data () {
    return {
      edit: false,
      driverSelect: this.driver,
      driverName: '',
      qrImg: null,
      showQr: false
    }
  },
  methods: {
    ...mapActions(['setBuses']),
    editToggle () {
      this.edit = !this.edit
    },
    showToggle () {
      this.showQr = !this.showQr
    },
    updateBus () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('cars').doc(this.bus).update({
          'driver': this.driverSelect
        }).then(() => {
          firebase.firestore().collection('managers').doc(this.$store.state.uid)
            .collection('cars').get()
            .then(snapshot => {
              let tmpBuses = {}
              snapshot.forEach(data => {
                tmpBuses[data.id] = data.data()
              })
              this.setBuses(tmpBuses)
            })
          firebase.firestore().collection('managers').doc(this.$store.state.uid)
            .collection('drivers').doc(this.driverSelect).get()
            .then(data => {
              this.driverName = data.data().prefix + data.data().fname + ' ' + data.data().lname
            })
          this.edit = false
          this.showQr = false
        })
    },
    getQr (data) {
      if ('url' in data) {
        firebase.storage().ref().child(data.url).getDownloadURL()
          .then(url => {
            this.qrImg = url
          })
      } else {
        console.log('wait for qr')
      }
    }
  },
  beforeDestroy () {
    this.onGetQr()
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

  .myQr {
    width: 136px;
    height: 136px;
    background: white;
    margin: auto;
    display: block;
  }

  .myQr img {
    width: 136px;
    height: 136px;
  }
</style>
