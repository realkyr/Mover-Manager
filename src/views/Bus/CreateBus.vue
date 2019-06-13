<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการรถโรงเรียน</span>
      <!--
        this page is all about buses
        TODO: IMPLEMENT THE REST FUNCTION and UI
        EXAMPLE: create bus, put driver into bus, Checklist
       -->
      <Navtab />
      <CreateBusPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Navtab from '../../components/ManageBusDriver/Navtab'
import CreateBusPanel from '../../components/ManageBusDriver/CreateBusPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    CreateBusPanel
  }
}
</script>
