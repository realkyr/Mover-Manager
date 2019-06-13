<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>แก้ไขบัญชีคนขับ</span>
      <DriverProfilePanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import DriverProfilePanel from '../../components/ManageBusDriver/DriverProfilePanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    DriverProfilePanel
  }
}
</script>
