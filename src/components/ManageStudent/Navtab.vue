<template>
  <div class="container-fluid">
    <div class="nav-tab row mt-3">
      <router-link
        to="/dashboard/student"
        active-class="active"
        tag="div"
        class="nav-tab-button left-nav-tab-button rounded-left"
        exact
      >
        <Student class="managebus-logo mr-2" />
        รายชื่อนักเรียน
      </router-link>
      <router-link
        to="/dashboard/student/group"
        active-class="active"
        tag="div"
        class="nav-tab-button right-nav-tab-button rounded-right"
        exact
      >
        <Student class="managebus-logo mr-2" />
        จัดกลุ่มนักเรียน
      </router-link>
    </div>
  </div>
</template>

<script>
import Student from '../Dashboard/icons/student'
export default {
  components: {
    Student
  }
}
</script>
