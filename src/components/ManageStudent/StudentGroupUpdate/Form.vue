<template>
  <form>
    <small v-show="errMsg" style="color:red;" class="alert-text thai">{{ errMsg }}</small>
    <div class="form-group">
      <label for="name">Group Name | ชื่อกลุ่ม</label>
      <input type="text" class="form-control" id="name" placeholder="กลุ่มแรก" v-model="name" />
    </div>
    <div class="form-group">
      <label for="plate">Students | นักเรียน</label>
      <multiselect
        v-model="value"
        :options="options"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="เลือกนักเรียน"
        label="name"
        track-by="name"
      ></multiselect>
    </div>
    <div class="form-group">
      <label for="phone">Section | ช่วงเวลา</label>
      <select class="custom-select mr-sm-2" v-model="section">
        <option value>เลือกช่วงเวลา...</option>
        <option value="เช้า">ช่วงเช้า</option>
        <option value="บ่าย">ช่วงบ่าย</option>
      </select>
    </div>
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="updateGroup">บันทึกข้อมูล</button>
    </div>
  </form>
</template>

<script>
import Multiselect from 'vue-multiselect'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    Multiselect
  },
  mounted () {
    Object.keys(this.$store.state.students).forEach(sid => {
      this.options.push({
        sid: sid,
        name: this.$store.state.students[sid].prefix + this.$store.state.students[sid].fname + ' ' + this.$store.state.students[sid].lname
      })
    })
    // ดึงข้อมูลกลุ่มนักเรียนตาม groupId ที่ส่งเข้ามา
    firebase.firestore().collection('managers').doc(this.$store.state.uid)
      .collection('student-groups').doc(this.$route.params.groupId).get()
      .then(data => {
        data.data().students.forEach(sid => {
          let tmpOption = {
            sid: sid,
            name: this.$store.state.students[sid].prefix + this.$store.state.students[sid].fname + ' ' + this.$store.state.students[sid].lname
          }
          this.value.push(tmpOption)
        })
        this.name = data.data().name
        this.section = data.data().section
      })
  },
  data () {
    return {
      name: '',
      section: '',
      value: [],
      options: [],
      errMsg: ''
    }
  },
  methods: {
    updateGroup () {
      if (this.name !== '' && this.section !== '' && this.value.length !== 0) {
        let selects = []
        this.value.forEach(data => {
          selects.push(data.sid)
        })
        firebase
          .firestore()
          .collection('managers')
          .doc(this.$store.state.uid)
          .collection('student-groups')
          .doc(this.$route.params.groupId)
          .update({
            'name': this.name,
            'section': this.section,
            'students': selects
          })
          .then(() => {
            this.$router.replace({ path: '/dashboard/student/group' })
          })
      } else {
        this.errMsg = 'โปรดกรอกข้อมูลให้ครบถ้วน'
      }
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect__tag {
  background: rgb(242, 108, 37);
}
.multiselect__tag-icon:after {
  content: "×";
  color: #fff;
  font-size: 14px;
}
.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: rgb(242, 108, 37);
}
.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: black;
}
.multiselect__option--highlight {
  background: rgba(33, 149, 186, 1);
  outline: none;
  color: white;
}
.multiselect__option--highlight:after {
  content: attr(data-select);
  background: rgba(33, 149, 186, 1);
  color: white;
}
.multiselect__option--selected {
  background: #F3F3F3;
  color: #35495E;
  font-weight: bold;
}
.multiselect__option--selected:after {
  content: attr(data-selected);
  color: silver;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: #FF6A6A;
  color: #fff;
}
</style>

<style scoped>
input:focus {
  border-color: #ffffff;
  box-shadow: 0 0 8px 0 white;
}

.multiselect__element {
  margin-top: 0 !important;
}

.form-group {
  margin-bottom: 2rem;
}

#add-btn {
  width: 10rem;
  height: 2rem;
  background: linear-gradient(180deg, rgba(33, 149, 186, 1) 0%);
}
</style>
