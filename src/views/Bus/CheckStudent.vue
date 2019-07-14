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
      <CheckStudentPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Navtab from '../../components/ManageBusDriver/Navtab'
import CheckStudentPanel from '../../components/ManageBusDriver/CheckStudentPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    CheckStudentPanel
  }
}
</script>
