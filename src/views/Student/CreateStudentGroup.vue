<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการนักเรียน</span>
      <!--
        this page is all about buses
        TODO: IMPLEMENT THE REST FUNCTION and UI
        EXAMPLE: create bus, put driver into bus, Checklist
       -->
      <Navtab />
      <CreateStudentGroupPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Navtab from '../../components/ManageStudent/Navtab'
import CreateStudentGroupPanel from '../../components/ManageStudent/CreateStudentGroupPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    CreateStudentGroupPanel
  }
}
</script>
