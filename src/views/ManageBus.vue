<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar @sendInputBus="listenBus" />
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการรถโรงเรียน</span>
      <!--
        this page is all about buses
        TODO: IMPLEMENT THE REST FUNCTION and UI
        EXAMPLE: create bus, put driver into bus, Checklist
       -->
      <Navtab />
      <BusPanel ref="busPanel"/>
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Navtab from '../components/ManageBusDriver/Navtab'
import BusPanel from '../components/ManageBusDriver/BusPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    BusPanel
  },
  methods: {
    listenBus (data) {
      this.$refs.busPanel.onListenBus(data)
    }
  }
}
</script>

<style>
.inside-container {
  margin-left: 50pt;
  padding: 20px 20px 0 20px;
  background: rgb(243, 243, 243);
  margin-left: 50pt;
  flex-grow: 1;
}
</style>
