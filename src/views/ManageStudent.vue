<template>
  <div>
    <Searchbar/>
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span>จัดการรายชื่อนักเรียน</span>
      <!--
        this page mostly about manage children
        TODO: Implement UI and most function
        EXAMPLE: Create student profile
       -->
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'

export default {
  components: {
    Searchbar,
    Sidebar
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background: rgb(243, 243, 243);
}
</style>
