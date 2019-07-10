<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      <span>แก้ไขนักเรียน</span>
      <StudentProfilePanel />
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import StudentProfilePanel from '../../components/ManageStudent/StudentProfilePanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    StudentProfilePanel
  }
}
</script>
