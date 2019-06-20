<template>
  <div>
    <div class="map thai">
      <!-- <span><i style="color:red;" class="fas fa-map-marker-alt"></i>  school_place</span> -->
      <div id="myMap" class="shadow" ref="myMap"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
        title: 'Hello World!'
      })
    }
  }
}
</script>

<style scoped>
.thai {
  font-size: 18pt;
}
.school-name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  width: 350px;
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
#myMap {
  width: 100%;
  height: calc(100vh - 120pt);
  border-radius: 10px;
  /* margin: 10px 0 0 0; */
}
.map span {
  color: #aaa;
  font-style: italic;
}
</style>
