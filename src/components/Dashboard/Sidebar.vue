<template>
  <div class="sidebar">
    <vs-col vs-type="flex" vs-justify="center">
      <ul>
        <router-link to="/dashboard" tag="li" active-class="active" class="navbtn" exact>
          <home width="18" height="18" />
        </router-link>
        <router-link to="/dashboard/bus" tag="li" active-class="active" class="navbtn" exact>
          <schoolbus width="18" height="18" />
        </router-link>
        <router-link to="/dashboard/student" tag="li" active-class="active" class="navbtn" exact>
          <student width="18" height="18" />
        </router-link>
        <router-link to="/dashboard/family" tag="li" active-class="active" class="navbtn" exact>
          <family width="18" height="18" />
        </router-link>
      </ul>
    </vs-col>
  </div>
</template>

<script>
import schoolbus from './icons/schoolbus.vue'
import home from './icons/home.vue'
import student from './icons/student.vue'
import family from './icons/family.vue'

export default {
  components: {
    schoolbus,
    home,
    student,
    family
  }
}
</script>

<style>
li {
  list-style-type: none;
  margin-top: 20pt;
}

.sidebar {
  width: 50pt;
  height: calc(100vh - 50pt);
  background: white;
  position: absolute;
  border-top: 0.5pt solid rgb(236, 235, 243);
}

.navbtn path {
  fill: rgb(235, 235, 235)
}
.navbtn {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 27pt;
  width: 27pt;
}

.navbtn i {
  font-size: 12pt;
  color: rgb(235, 235, 235)
}

.active path {
  fill: #2094b9;
}

.active {
  border: 0.5pt solid rgb(235, 235, 235);
}
</style>
