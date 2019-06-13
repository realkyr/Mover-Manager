<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการคนขับ</span>
      <Navtab />
      <DriverPanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import Navtab from '../components/ManageBusDriver/Navtab'
import DriverPanel from '../components/ManageBusDriver/DriverPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    DriverPanel
  }
}
</script>
