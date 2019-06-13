<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คนขับรถ</h3>
      </div>
      <!-- <div class="col-auto">
        <router-link to="bus/create" tag="button" class="btn mover-btn thai">
          &#43; เพิ่ม
        </router-link>
      </div> -->
    </div>
    <div class="bus-listview">
      <div class="row mr-3">
        <div class="col-12" :key="i.id" v-for="i in drivers">
          <div
            class="row
            parent-card
            d-flex justify-content-between
            align-items-center
            shadow-sm
            mt-2 ml-1 p-3
            bg-white
            rounded"
          >
          <div class="row d-flex align-items-center">
            <div class="col-auto">
              <img class="rounded-circle" type="image/webp" src="../../assets/pics/profile-placeholder.webp">
            </div>
            <div class="col-auto">
              <h6 class="thai">{{i.prefix}}{{ i.name }}</h6>
              <small v-if="Boolean(i.uid)">{{ i.uid }}<br/></small>
              <small><i class="fas fa-mobile-alt mr-2" />094558755</small>
            </div>
          </div>
          <router-link to="/dashboard/drivers/profile" tag="button" class="btn mover-btn">แก้ไขข้อมูล</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drivers: {
        // all buses information goes here
        A1: {
          id: 'A1',
          name: 'สมชาย ศรีสุข',
          uid: 'EF236D0-521A-57D2-B27C-A55662F7A26B',
          prefix: 'นาย'
        },
        A2: {
          id: 'A2',
          name: 'ภูรี กานุสนธิ์',
          prefix: 'นาย'
        }
      }
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100px;
  }

  i {
    width: 10px
  }
</style>
