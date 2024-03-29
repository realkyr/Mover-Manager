<template>
  <div class="map-container">
    <div id="map"></div>
    <PopupContent
      class="bus"
      :key="bus"
      v-for="bus in Object.keys(buses)"
      :businfo="buses[bus]"
      :id="bus"
    />
  </div>
</template>

<script>
/* eslint-disable no-undef */
import firebase from 'firebase/app'
import 'firebase/firestore'
import PopupContent from './Popup.vue'
import CreateClassPopUp from './Popup.js'
export default {
  components: {
    PopupContent
  },
  props: {
    buses: {
      type: Object
    }
  },
  mounted () {
    this.initMap()
    setTimeout(() => {
      this.generateMarker()
      this.generatePopup()
    }, 1500)
    this.$nextTick(() => {
      this.getUserLocation()
    })
    // example of editing data in popup
    this.onMap = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('cars').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'modified') {
            if ('popup' in this.buses[change.doc.id] && 'marker' in this.buses[change.doc.id]) {
              console.log('change')
              let lat = change.doc.data().current_location.lat
              let lng = change.doc.data().current_location.lng
              let myLatlng = new google.maps.LatLng(lat, lng)
              this.buses[change.doc.id].marker.setPosition(myLatlng)
              this.buses[change.doc.id].popup.position = myLatlng
            } else {
              this.createMarker(change)
              this.createPopup(change)
            }
          }
        })
      })
  },
  data () {
    return {
      initial_position: {
        lat: 13.7122618,
        lng: 100.65775
      },
      popupOpen: []
    }
  },
  methods: {
    togglePopup (id) {
      // this method uses to toggle a pop up when you click at marker
      let popup = document.querySelector('#popup-' + id)
      if (popup.style.display === 'block') {
        popup.style.display = 'none'
        const index = this.popupOpen.indexOf(id)
        this.popupOpen.splice(index, 1)
      } else {
        popup.style.display = 'block'
        this.popupOpen.push(id)
      }
    },
    initMap () {
      // init the map in initial_position
      // streetViewControl is to disable street view
      // mapTypeControl is to disable satellite view
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.initial_position,
        zoom: 15,
        streetViewControl: false,
        mapTypeControl: false
      })
    },
    generateMarker () {
      console.log('generateMarker')
      // generate the marker and store it in to buses object
      // buses {
      //  busid {
      //    ....
      //    marker {...here}
      //  }
      // }
      // something like this.buses.['busid'].marker.setPosition()
      for (let i of Object.keys(this.buses)) {
        if (Object.keys(this.buses[i].current_location).length !== 0) {
          this.buses[i].marker = new google.maps.Marker({
            position: this.buses[i].current_location,
            map: this.map,
            icon: require('../../assets/pics/marker.svg'),
            title: 'myMarker'
          })

          this.buses[i].marker.addListener('click', e => {
            this.togglePopup(i)
            // this.map.setCenter(this.buses[i].marker.getPosition())
          })
        }
      }
    },
    generatePopup () {
      console.log('generatePopup')
      // create popup
      let Pop = CreateClassPopUp()
      for (let i of Object.keys(this.buses)) {
        if (Object.keys(this.buses[i].current_location).length !== 0) {
          let position = this.buses[i].current_location
          let temp = new Pop(
            new google.maps.LatLng(position.lat, position.lng),
            document.getElementById(i),
            'popup-' + i
          )
          temp.setMap(this.map)
          this.buses[i].popup = temp
        }
      }
    },
    generateBounds () {
      const bounds = new google.maps.LatLngBounds()
      let busesId = Object.keys(this.buses)
      if (busesId.length === 1) {
        for (let m of busesId) {
          if ('marker' in this.buses[m]) {
            bounds.extend(this.buses[m].marker.getPosition())
          }
        }
        this.map.fitBounds(bounds)
        this.map.setZoom(12)
      } else {
        for (let m of busesId) {
          if ('marker' in this.buses[m]) {
            bounds.extend(this.buses[m].marker.getPosition())
          }
        }
        this.map.fitBounds(bounds)
      }
    },
    getUserLocation () {
      if (navigator.geolocation) {
        // get user location and then animate map to the position
        navigator.geolocation.getCurrentPosition(
          position => {
            this.position = position.coords
            this.map.panTo({
              lat: this.position.latitude,
              lng: this.position.longitude
            })
          },
          () => {
            // error handling
            alert('Geolocation are not currently available')
          },
          { timeout: 10000 }
        )
      } else {
        alert('this browser does not support geolocation')
      }
    },
    onFocusBus (licensePlate) {
      Object.keys(this.buses).forEach(bus => {
        if (this.buses[bus].license_plate === licensePlate) {
          this.togglePopup(bus)
          this.map.setZoom(14)
          this.map.setCenter(this.buses[bus].marker.getPosition())
        }
      })
    },
    createMarker (busData) {
      this.buses[busData.doc.id].marker = new google.maps.Marker({
        position: busData.doc.data().current_location,
        map: this.map,
        icon: require('../../assets/pics/marker.svg'),
        title: 'myMarker'
      })
      this.buses[busData.doc.id].marker.addListener('click', e => {
        this.togglePopup(busData.doc.id)
      })
    },
    createPopup (busData) {
      let Pop = CreateClassPopUp()
      let position = busData.doc.data().current_location
      let temp = new Pop(
        new google.maps.LatLng(position.lat, position.lng),
        document.getElementById(busData.doc.id),
        'popup-' + busData.doc.id
      )
      temp.setMap(this.map)
      this.buses[busData.doc.id].popup = temp
    }
  },
  beforeDestroy () {
    this.onMap()
  }
}
</script>

<style>
#map {
  width: calc(100vw - 80pt);
  height: calc(100vh - 160pt);
  position: absolute;
  left: 90px;
  bottom: 15px;
  border-radius: 10px;
  border: 0.5pt solid rgb(236, 235, 243);
}

#popup {
  backdrop-filter: blur(0);
  -webkit-backdrop-filter: blur(0);
}

.popup-bubble-anchor::before {
  z-index: 3;
  content: "";
  position: absolute;
  top: 3px;
  left: 0;
  /* Center the tip horizontally. */
  transform: translate(-50%, 0);
  /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
  width: 0;
  height: 0;
  /* The tip is 8px high, and 12px wide. */
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: /* TIP_HEIGHT= */ 8px solid #fff;
}

.popup-bubble {
  /* Position the bubble centred-above its parent. */
  position: absolute;
  top: 10px;
  left: 0;
  transform: translate(-50%, 0%);
  overflow-y: auto;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
}

.popup-container {
  cursor: auto;
  height: 0;
  position: absolute;
  /* The max width of the info window. */
  width: 200px;
}
</style>
