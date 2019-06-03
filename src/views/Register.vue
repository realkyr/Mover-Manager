<template>
  <div class="box">
    <div class="logo-container">
      <img id="logo" src="../assets/logo/logo.png">
    </div>
    <hr />
    <div class="row">
      <div class="col">
        <div class="input-control">
          <div class="my-input-control">
            <input v-model="email" class="thai" type="text" placeholder="E-Mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <small v-show="errEmail" style="color:red;" class="alert-text thai"
          > {{ errEmail }} </small>
          <div class="my-input-control">
            <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai"
          > {{ errName }} </small>
          <div class="my-input-control">
            <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          <small v-show="errName" style="color:red;" class="alert-text thai"
          > {{ errName }} </small>
          <div class="my-input-control">
            <input v-model="phone" class="thai" type="text" placeholder="เบอร์โทรศัพท์">
            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
          </div>
          <small v-show="errPhone" style="color:red;" class="alert-text thai"
          > {{ errPhone }} </small>
          <div class="my-input-control">
          <input v-model="password" class="thai" type="password" placeholder="รหัสผ่าน">
          <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errPass" style="color:red;" class="alert-text thai"
          > {{ errPass }} </small>
          <div class="my-input-control">
            <input v-model="conPassword" class="thai" type="password" placeholder="ยืนยันรหัสผ่าน">
            <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <small v-show="errConPass" style="color:red;" class="alert-text thai"
          > {{ errConPass }} </small>
        </div>
      </div>
      <div class="vl"></div>
      <div class="col">
        <div class="search">
          <input id="pac-input" ref="pac-input" type="text" placeholder="Enter a School name" v-model="$store.state.addressName">
        </div>
        <div id="myMap" ref="myMap"></div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" id="regiter" class="btn thai" @click="register">สมัครสมาชิก</button>
      <button type="button" id="back" class="btn thai" @click="cancel">ยกเลิก</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  metaInfo: {
    title: 'Register | Mover'
  },
  data () {
    return {
      errEmail: '',
      errPass: '',
      errConPass: '',
      errName: '',
      errPhone: '',
      email: '',
      password: '',
      conPassword: '',
      fname: '',
      lname: '',
      phone: '',
      initial_position: {
        lat: 13.7122618,
        lng: 100.65775
      }
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    ...mapActions(['setAddress']),
    initMap () {
      const map = new google.maps.Map(this.$refs['myMap'], {
        center: this.initial_position,
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false
      })
      const input = this.$refs['pac-input']
      const autocomplete = new google.maps.places.Autocomplete(input)
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo('bounds', map)
      // เซ็ตดาต้าที่รีเทรินมาเมื่อยูสเซอร์เลือกสถานที่
      autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name'])
      const marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true
      })
      // marker drag actions
      marker.addListener('dragend', this.changeAddress)
      autocomplete.addListener('place_changed', () => {
        marker.setVisible(false)
        const place = autocomplete.getPlace()
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'")
          return
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport)
        } else {
          map.setCenter(place.geometry.location)
          map.setZoom(16)
        }
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)
        this.setAddress(place.name)
      })
    },
    async changeAddress (event) {
      const latLng = event.latLng.lat() + ',' + event.latLng.lng()
      const key = 'AIzaSyBZKN6M5vhOed1h6qwr45FtLQWYNAElDd4'
      const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${key}`
      const address = await axios.get(api)
      console.log(api)
      console.log(address.data)
      this.setAddress(address.data.results[0].address_components[1].long_name)
    },
    register () {
      if (this.conPassword !== this.password) {
        this.errConPass = 'โปรดกรอกรหัสให้ตรงกัน'
      } else {
        this.errConPass = ''
      }
      if (this.password === '' || this.conPassword === '') {
        this.errPass = 'โปรดกรอกรหัสผ่าน'
      } else {
        this.errPass = ''
      }
      if (this.email === '') {
        this.errEmail = 'โปรดกรอกอีเมล'
      } else {
        this.errEmail = ''
      }
      if (this.phone === '') {
        this.errPhone = 'โปรดกรอกเบอร์โทรศัพท์'
      } else {
        this.errPhone = ''
      }
      if (this.fname === '' || this.lname === '') {
        this.errName = 'โปรดกรอกชื่อ-นามสกุลให้ครบถ้วน'
      } else {
        this.errName = ''
      }
      // } else {
      //   this.$router.replace('Login')
      // }
    },
    cancel () {
      this.$router.replace('Login')
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}
#pac-input {
  padding-left: 12px;
}
#myMap {
  height: 360px;
}

.box {
  background: white;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 90%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

#logo {
  width: 50px;
  align-self: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
  width: 100%;
}

.my-input-control {
  position: relative;
}

i {
  position: absolute;
  left: 5pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}

input {
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  overflow-x: hidden;
  border: 1pt solid rgb(234, 234, 234);
  border-radius: 18px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 10pt;
  -webkit-appearance: none;
}

input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

.input-control {
  position: relative;
  margin: 15px 0 15px 0;
  width: 100%;
  padding: 0 70px 0 70px;
}

#register {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 10px 0;
}

#register:hover {
  box-shadow: none;
}

#back {
  color: black !important;
  background: white !important;
  /* background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important; */
  border-radius: 18px;
  width: 100%;
}

#back:hover {
  background: #d3d3d3 !important;
}

.btn-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  margin: 1rem auto 0 auto;
}

.btn {
  margin: 10px 0 0 0;
  color: white;
  border-radius: 18px !important;
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
}

.vl {
  border-left: 1px solid #d3d3d3;
}

</style>
