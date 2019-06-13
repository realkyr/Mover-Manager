<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">บัญชีผู้ปกครอง</h3>
      </div>
    </div>
    <div class="bus-listview">
      <div class="row mr-3">
        <div class="col-12" :key="i.id" v-for="i in parents">
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
              <small v-if="Boolean(i.tel)">Tel {{ i.tel }}</small>
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
      parents: {
        ab1: {
          id: 'ab1',
          name: 'นายอิงครัต ทินกรศรีสุภาพ',
          tel: '0945587588'
        },
        ab2: {
          id: 'ab2',
          name: 'นายภากร ศุภนิมิตวาสนา'
        },
        ab3: {
          id: 'ab3',
          name: 'นายธีรภัทร ฟูเทพ'
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

  h6 {
    margin-bottom: 1px;
  }

  small {
    font-style: italic;
  }
</style>
