<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 class="thai">คำขอรับรอง</h3>
        <small>กดรับคำขอเพื่อยืนยันว่าผู้ใช้งานนี้เป็นผู้ปกครองตัวจริงของนักเรียน</small>
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
            mt-1 ml-1 p-3 mb-2
            bg-white
            rounded"
          >
          <div class="row d-flex align-items-center">
            <div class="col-auto">
              <img class="rounded-circle" type="image/webp" src="../../../assets/pics/profile-placeholder.webp">
            </div>
            <div class="col-auto">
              <h6 class="thai">{{ i.name }}</h6>
              <small v-if="Boolean(i.tel)">Tel {{ i.tel }}</small>
            </div>
          </div>
          <span>
            <button class="btn mover-btn">ดูข้อมูล</button>
            <button class="btn mover-btn bg-success ml-1 mr-1">รับคำขอ</button>
            <button class="btn mover-btn bg-danger">ปฏิเสธคำขอ</button>
          </span>
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
