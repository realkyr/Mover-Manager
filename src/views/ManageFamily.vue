<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการครอบครัว</span>
      <!--
        this page mostly about manage parent
        TODO: NOTHING FOR NOW!
        EXAMPLE: create parent profile which parent can view student status
       -->
      <Navtab />
      <FamPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Navtab from '../components/ManageFamily/Navtab'
import FamPanel from '../components/ManageFamily/FamilyPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    FamPanel
  }
}
</script>
