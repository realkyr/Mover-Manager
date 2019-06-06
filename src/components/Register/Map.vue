<template>
  <div>
    <div class="search ">
      <div class="my-input-control">
        <input id="pac-input" class="thai" ref="pac-input" type="text" placeholder="  โปรดระบุชื่อโรงเรียน" v-model="$store.state.addressName">
        <i class="fas fa-school" aria-hidden="true"></i>
      </div>
    </div>
    <div id="myMap" ref="myMap"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
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
      infowindow.setContent(infowindowContent)
      const marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true
      })
      // คลิกบนแมพเพื่อ set address
      map.addListener('click', (event) => {
        this.addMarker(event, map, marker)
      })
      // marker actions
      marker.addListener('click', () => {
        infowindow.open(map, marker)
      })
      marker.addListener('dragend', this.changeAddress)
      autocomplete.addListener('place_changed', () => {
        contentString = `
        <div class="card-content text-center">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 font-weight-bold">${autocomplete.getPlace()}</p>
            </div>
          </div>
        </div>
      `
        const infowindow = new google.maps.InfoWindow({
          content: contentString
        })
        infowindow.open(map, marker)
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
        console.log(place.geometry.location)
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)
        this.setAddress(place.name)
      })
    },
    addMarker (event, map, marker) {
      marker.setPosition(event.latLng)
      marker.setVisible(true)
      map.panTo(event.latLng)
      this.changeAddress(event)
    },
    async changeAddress (event) {
      const latLng = event.latLng.lat() + ',' + event.latLng.lng()
      const key = 'AIzaSyBZKN6M5vhOed1h6qwr45FtLQWYNAElDd4'
      const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${key}`
      const address = await axios.get(api)
      console.log(api)
      console.log(address.data)
      this.setAddress(address.data.results[0].address_components[1].long_name)
    }
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}
#myMap {
  height: 280px;
  border-radius: 10px;
}
.my-input-control {
  position: relative;
  width: 100%;
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

@media screen and (max-width: 992px) {
  #myMap {
    height: 280px;
  }
}
@media screen and (max-width: 768px) {
  #myMap {
    height: 250px;
  }
}
@media screen and (max-width: 576px) {
  #myMap {
    height: 250px;
  }
}
</style>
