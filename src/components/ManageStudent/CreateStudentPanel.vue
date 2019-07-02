<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">เพิ่มนักเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link
          to="/dashboard/student"
          tag="button"
          class="btn mover-btn thai"
          active-class="active"
          exact
        >
          <i style="color: white;" class="fas fa-backward mr-1"></i>ย้อนกลับ
        </router-link>
      </div>
    </div>
    <div class="container-fluid">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from './CreateStudent/Form'
export default {
  components: {
    Form
  }
}
</script>
