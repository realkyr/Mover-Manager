<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span>จัดการรถโรงเรียน</span>
      <!--
        this page mostly about manage children
        TODO: Implement UI and most function
        EXAMPLE: Create student profile
       -->
      <Navtab />
    </div>
  </div>
</template>

<script>
import Navtab from '../../components/ManageBusDriver/Navtab'
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'

export default {
  components: {
    Navtab,
    Searchbar,
    Sidebar
  }
}
</script>
