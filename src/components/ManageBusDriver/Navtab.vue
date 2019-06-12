<template>
  <div class="container-fluid">
    <div class="nav-tab row mt-3">
      <router-link
        to="/dashboard/bus"
        active-class="active"
        tag="div"
        class="nav-tab-button left-nav-tab-button rounded-left"
        exact
      >
        <Schoolbus class="managebus-logo mr-2" />
        รถโรงเรียน
      </router-link>
      <router-link
        to="/dashboard/drivers"
        active-class="active"
        tag="div"
        class="nav-tab-button right-nav-tab-button rounded-right"
      >
        <Driver class="managebus-logo mr-2" />
        คนขับรถ
      </router-link>
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
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-tab-button:hover {
  background: #ececec;
}

.nav-tab-button.active {
  background: #2594bc;
  color: white;
}

.managebus-logo path{
  fill: #2c3e50;
}

.active .managebus-logo path{
  fill: white;
}
</style>
