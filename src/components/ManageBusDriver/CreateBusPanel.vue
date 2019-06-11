<template>
  <div class="container-fluid mt-3 p-2 rounded buspanel">
    <div class="row p-4 d-flex align-items-center justify-content-between">
      <h3 class="thai">เพิ่มรถโรงเรียน</h3>
    </div>
    <div class="container-fluid">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from './Create/Form'

export default {
  components: {
    Form
  }
}
</script>
