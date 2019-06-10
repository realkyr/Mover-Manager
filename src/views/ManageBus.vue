<template>
  <div>
    <Searchbar/>
    <Sidebar />
    <div class="thai bus-inside-container">
      <span>จัดการรถโรงเรียน</span>
      <!--
        this page is all about buses
        TODO: IMPLEMENT THE REST FUNCTION and UI
        EXAMPLE: create bus, put driver into bus, Checklist
       -->
      <Navtab />
      <BusPanel />
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
  }
}
</script>

<style>
.bus-inside-container {
  margin-left: 50pt;
  padding: 20px;
  background: rgb(243, 243, 243);
  margin-left: 50pt;
  padding: 20px
}
</style>
