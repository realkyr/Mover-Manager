<template>
  <div>
    <div class="map thai">
      <div id="myMap" class="shadow" ref="myMap"></div>
      <div class="school-name thai d-flex shadow">
        <div class="d-flex justify-content-start align-items-center ml-4">
          <i style="color:red;font-size:18pt;" class="fas fa-map-marker-alt"></i>
          <input
            id="input-school"
            ref="input-school"
            class="thai ml-3 mr-3"
            :class="{ 'd-none': !isEdit }"
            v-model="$store.state.address.name"
            type="text"
            placeholder="โปรดระบุชื่อโรงเรียน"
          >
          <span v-if="!isEdit" class="font-weight-light ml-3 mr-3">{{ this.$store.state.user.school.name }}</span>
          <span @click="editToggle">
            <i v-if="!isEdit" class="fas fa-edit text-primary"></i>
            <i v-else class="fas fa-times-circle text-danger"></i>
          </span>
          <div v-if="isEdit" class="btn-group">
            <button type="button" class="btn mover-btn thai" @click="updateSchool">บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
// import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      initial_position: this.$store.state.user.school.latlng,
      isEdit: false
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    ...mapActions(['setAddress', 'setUser']),
    initMap () {
      const map = new google.maps.Map(this.$refs['myMap'], {
        center: this.initial_position,
        zoom: 16,
        streetViewControl: false,
        mapTypeControl: false
      })
      const marker = new google.maps.Marker({
        position: this.initial_position,
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true
      })
      const input = this.$refs['input-school']
      const autocomplete = new google.maps.places.Autocomplete(input)
      autocomplete.bindTo('bounds', map)
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])
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
        console.log(place)
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)
        this.setAddress(place)
      })
    },
    editToggle () {
      this.isEdit = !this.isEdit
    },
    updateSchool () {
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .update({
          'school.name': this.$store.state.address.name,
          'school.latlng': this.$store.state.address.geometry.location
        })
      firebase.firestore().collection('managers').doc(this.$store.state.uid).get()
        .then(data => {
          this.setUser(data.data())
        })
      this.isEdit = false
      this.$store.state.address = {
        name: ''
      }
    }
  }
}
</script>

<style scoped>
.thai {
  font-size: 14pt;
}
.school-name {
  font-size: 16pt;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  width: 58%;
  height: 70px;
  position: fixed;
  background: white;
  bottom: 50px;
}
.map {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#input-school {
  width: 35rem;
  height: 40px;
  border: 1pt solid rgb(234, 234, 234);
  -webkit-appearance: none;
  border-radius: 18px;
  overflow-x: hidden;
  box-sizing: border-box;
  transition: 0.3s;
  outline: none;
  padding: 5px 5px 5px 10px;
}
#myMap {
  width: 100%;
  height: calc(100vh - 120pt);
  border-radius: 10px;
}
</style>
