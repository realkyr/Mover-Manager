<template>
  <div class="container-fluid">
    <div class="nav-tab row mt-3">
      <router-link
        to="/dashboard/family"
        active-class="active"
        tag="div"
        class="nav-tab-button left-nav-tab-button rounded-left"
        exact
      >
        <Family class="managebus-logo mr-2" />
        บัญชีผู้ปกครอง
      </router-link>
      <router-link
        to="/dashboard/family/requests"
        active-class="active"
        tag="div"
        class="nav-tab-button right-nav-tab-button rounded-right"
        exact
      >
        <Driver class="managebus-logo mr-2" />
        คำขอรับรอง
      </router-link>
    </div>
  </div>
</template>

<script>
import Driver from '../Dashboard/icons/driver'
import Family from '../Dashboard/icons/family'

export default {
  components: {
    Driver,
    Family
  }
}
</script>
