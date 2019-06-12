<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai bus-inside-container">
      <span>จัดการครอบครัว</span>
      <!--
        this page mostly about manage parent
        TODO: NOTHING FOR NOW!
        EXAMPLE: create parent profile which parent can view student status
       -->
      <Navtab />
      <BusPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Navtab from '../components/ManageFamily/Navtab'
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
