<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar />
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span style="color: #7D8797">ภาพรวม</span> > รถทั้งหมด
      <statebar
        @onFitBounds="mapFitBounds"
        class="mt-3"
        :allBus="Object.keys($store.state.buses).length"
        :active="1"
      />
      <!--
        state bar recieve props as a number
        which has been calculated
        ใส่ prop เป็นรถที่ขับอยู่ รถทั้งหมด ต่าง ๆ
      -->
      <Map ref="myMap" :buses="$store.state.buses" />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Map from '../components/Dashboard/Map'
import statebar from '../components/Dashboard/Statebar.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
export default {
  components: {
    Searchbar,
    Sidebar,
    Map,
    statebar
  },
  mounted () {
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('cars').get()
      .then(snapshot => {
        let tmpBuses = {}
        snapshot.forEach(data => {
          tmpBuses[data.id] = data.data()
        })
        this.setBuses(tmpBuses)
      })
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['setBuses']),
    mapFitBounds (value) {
      if (value) {
        this.$refs.myMap.generateBounds()
      }
    }
  }
}
</script>

<style>
ul {
  padding-inline-start: 0;
}
</style>
