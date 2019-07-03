<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">เพิ่มรถโรงเรียน</h3>
      </div>
      <div class="col-auto">
        <router-link to="/dashboard/bus" tag="button" class="btn mover-btn thai">
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
import Form from './BusCreate/Form'

export default {
  components: {
    Form
  }
}
</script>
