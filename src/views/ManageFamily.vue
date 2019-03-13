<template>
  <div class="container">
    <Searchbar/>
    <Sidebar />
    <div style="margin-left: 50pt; padding: 20px" class="thai inside-container">
      <span>ส่วนจัดการผู้ปกครอง</span> <br />
      <span>* ส่วนนี้อยู่ในระหว่างการพัฒนา</span>
      <!--
        this page mostly about manage parent
        TODO: NOTHING FOR NOW!
        EXAMPLE: create parent profile which parent can view student status
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
