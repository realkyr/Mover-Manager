<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">บัญชีผู้ปกครอง</h3>
      </div>
    </div>
    <div class="bus-listview">
      <div class="row">
        <div class="col-11" :key="i" v-for="i in parents">
          <div
            class="row
            parent-card
            d-flex justify-content-between
            align-items-center
            shadow-sm
            mt-1 ml-1 p-3 mb-2
            bg-white
            rounded"
          >
          <div class="row d-flex align-items-center">
            <div class="col-auto">
              <img class="rounded-circle" type="image/webp" src="../../assets/pics/profile-placeholder.webp">
            </div>
            <div class="col-auto">
              <h6 class="thai">{{i}}</h6>
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
      parents: [
        'นายอิงครัต ทินกรศรีสุภาพ',
        'นายภากร ศุภนิมิตวาสนา'
      ]
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100px;
  }
</style>
