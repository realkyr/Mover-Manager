<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คนขับรถ</h3>
      </div>
      <div class="col-auto">
        <router-link to="bus/create" tag="button" class="btn mover-btn thai">
          &#43; เพิ่ม
        </router-link>
      </div>
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
              <h6 class="thai">{{ i.name }}</h6>
              <small v-if="Boolean(i.phoneNum)">Tel {{ i.phoneNum }}</small>
            </div>
          </div>
          <button class="btn mover-btn">ดูข้อมูล</button>
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
          phoneNum: '0945587588'
        },
        A2: {
          id: 'A2',
          name: 'ภูรี กานุสนธิ์',
          phoneNum: '0945587588'
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
</style>
