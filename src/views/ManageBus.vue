<template>
  <div class="container">
    <Searchbar/>
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span>จัดการรถโรงเรียน</span>
      <!--
        this page is all about buses
        TODO: IMPLEMENT THE REST FUNCTION and UI
        EXAMPLE: create bus, put driver into bus
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

.inside-container {
  margin-left: 50pt;
  padding: 20px;
}
</style>
