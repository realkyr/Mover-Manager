<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="col-auto">
        <h3 v-if="!isAdd" class="thai">รายชื่อนักเรียน</h3>
        <h3 v-else class="thai">เพิ่มนักเรียน</h3>
      </div>
      <div class="col-auto">
        <button v-if="!isAdd" class="btn mover-btn pl-2 pr-2" @click="addToggle">
          <i style="color: white;" class="fas fa-plus mr-1"></i>เพิ่มนักเรียน
        </button>
        <button v-else class="btn mover-btn pl-2 pr-2" @click="addToggle">
          <i style="color: white;" class="fas fa-backward mr-1"></i>ย้อนกลับ
        </button>
      </div>
    </div>
    <div v-if="!isAdd" class="bus-listview">
      <div class="row mr-3">
        <div class="col-12" :key="i.id" v-for="i in student">
          <div
            class="row parent-card d-flex justify-content-between align-items-center shadow-sm mt-2 ml-1 p-3 bg-white rounded"
          >
            <div class="row d-flex align-items-center">
              <div class="col-auto">
                <img
                  class="rounded-circle"
                  type="image/webp"
                  src="../../assets/pics/profile-placeholder.webp"
                >
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
    <CreateStudent v-else class="mt-3"/>
    <div v-if="isAdd" class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai">บันทึกข้อมูล</button>
    </div>
  </div>
</template>

<script>
import CreateStudent from '../ManageStudent/CreateStudent/Form'
export default {
  components: {
    CreateStudent
  },
  data () {
    return {
      isAdd: false,
      student: {
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
  },
  methods: {
    addToggle () {
      this.isAdd = !this.isAdd
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

#add-btn {
  width: 10rem;
  height: 2rem;
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%
  )
}
</style>
