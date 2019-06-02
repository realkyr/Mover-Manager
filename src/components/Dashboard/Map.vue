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
import PopupContent from './Popup.vue'
import CreateClassPopUp from './Popup.js'
import { setInterval } from 'timers'

export default {
  components: {
    PopupContent
  },
  props: {
    buses: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.initMap()
    this.generateMarker()
    this.generatePopup()
    this.$nextTick(() => {
      this.getUserLocation()
    }
    )
    // example of editing data in popup
    setInterval(() => {
      let lat = this.buses['A1']['marker'].getPosition().lat()
      let lng = this.buses['A1']['marker'].getPosition().lng()
      console.log({ lat, lng })
      let myLatLng = new google.maps.LatLng(lat, lng + 0.001)
      this.buses['A1']['marker'].setPosition(myLatLng)
    }, 1000)
  },
  data () {
    return {
      initial_position: {
        lat: 13.7122618,
        lng: 100.65775
      }
    }
  },
  methods: {
    togglePopup (id) {
      // this method uses to toggle a pop up when you click at marker
      let popup = document.querySelector('#popup-' + id)
      if (popup.style.display === 'block') {
        popup.style.display = 'none'
      } else popup.style.display = 'block'
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
      // generate the marker and store it in to buses object
      // buses {
      //  busid {
      //    ....
      //    marker {...here}
      //  }
      // }
      // something like this.buses.['busid'].marker.setPosition()
      for (let i of Object.keys(this.buses)) {
        this.buses[i].marker = new google.maps.Marker({
          position: this.buses[i].position,
          map: this.map,
          icon: require('../../assets/pics/marker.svg')
        })

        this.buses[i].marker.addListener('click', e => {
          this.togglePopup(i)
        })
      }
    },
    generatePopup () {
      // create popup
      let Pop = CreateClassPopUp()
      for (let i of Object.keys(this.buses)) {
        let position = this.buses[i].position
        let temp = new Pop(
          new google.maps.LatLng(position.lat, position.lng),
          document.getElementById(i),
          'popup-' + i
        )
        temp.setMap(this.map)
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
    }
  }
}
</script>

<style>
#map {
  width: calc(100vw - 80pt);
  height: calc(100vh - 180pt);
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
