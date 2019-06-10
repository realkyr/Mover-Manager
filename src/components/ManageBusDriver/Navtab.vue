<template>
  <div class="container-fluid">
    <div class="nav-tab row mt-3">
      <div class="nav-tab-button left-nav-tab-button rounded-left">
        <Schoolbus class="managebus-logo mr-2" />
        รถโรงเรียน
      </div>
      <div class="nav-tab-button right-nav-tab-button rounded-right">
        <Driver class="managebus-logo mr-2" />
        คนขับรถ
      </div>
    </div>
  </div>
</template>

<script>
import Driver from '../Dashboard/icons/driver'
import Schoolbus from '../Dashboard/icons/schoolbus'

export default {
  components: {
    Driver,
    Schoolbus
  }
}
</script>

<style>
.left-nav-tab-button {
  border-top: 0.5pt solid rgb(236, 235, 243);
  border-left: 0.5pt solid rgb(236, 235, 243);
  border-bottom: 0.5pt solid rgb(236, 235, 243);
}

.right-nav-tab-button {
  border-top: 0.5pt solid rgb(236, 235, 243);
  border-right: 0.5pt solid rgb(236, 235, 243);
  border-bottom: 0.5pt solid rgb(236, 235, 243);
}

.nav-tab-button {
  padding: 1em 4em;
  display: inline-flex;
  background: white;
  justify-content: center;
  align-items: center;
}

.managebus-logo path{
  fill: #2c3e50;
}
</style>
