<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar @onClickStd="focusStd" @sendInputStd="listenStd"/>
    <Sidebar />
    <div class="thai inside-container">
      <span>จัดการนักเรียน</span>
      <!--
        this page mostly about manage children
        TODO: Implement UI and most function
        EXAMPLE: Create student profile
       -->
      <Navtab />
      <StudentPanel ref="stdPanel"/>
    </div>
  </div>
</template>

<script>
import Navtab from '../components/ManageStudent/Navtab'
import Searchbar from '../components/Dashboard/Searchbar'
import Sidebar from '../components/Dashboard/Sidebar'
import StudentPanel from '../components/ManageStudent/StudentPanel'

export default {
  components: {
    Searchbar,
    Sidebar,
    Navtab,
    StudentPanel
  },
  methods: {
    focusStd (data) {
      this.$refs.stdPanel.onFocusStd(data)
    },
    listenStd (data) {
      this.$refs.stdPanel.onListenStd(data)
    }
    // listenIndex (data) {
    //   this.$refs.stdPanel.onListenIndex(data)
    // }
  }
}
</script>
