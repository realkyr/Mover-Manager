<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการครอบครัว</span>
      Comming Soon!
      <!-- <Navtab />
      <RequestsPanel /> -->
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
// import Navtab from '../../components/ManageFamily/Navtab'
// import RequestsPanel from '../../components/ManageFamily/Requests/RequestsPanel'

export default {
  components: {
    Searchbar,
    Sidebar
    // Navtab,
    // RequestsPanel
  }
}
</script>
