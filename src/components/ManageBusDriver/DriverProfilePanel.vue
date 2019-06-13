<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="row col-auto d-flex align-items-center">
        <div class="col-auto">
          <img class="rounded-circle" type="image/webp" src="../../assets/pics/profile-placeholder.webp">
        </div>
        <div class="col-auto">
          <h5>นายสมชาย ศรีสุข</h5>
          <small>EF236D0-521A-57D2-B27C-A55662F7A26B</small>
        </div>
      </div>
      <div class="col-auto">
        <router-link to="/dashboard/drivers/" tag="button" class="btn mover-btn thai">
          ย้อนกลับ
        </router-link>
      </div>
    </div>
    <hr>
    <Form />
  </div>
</template>

<script>
import Form from './DriverUpdate/Form'

export default {
  components: {
    Form
  }
}
</script>

<style scoped>
  img {
    max-width: 100px;
  }

  .buspanel {
    height: auto;
  }
</style>
