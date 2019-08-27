<template>
  <form>
    <small v-show="errMsg" style="color:red;font-size:12pt" class="alert-text thai">{{ errMsg }}</small>
    <div class="form-group">
      <label for="name">Group Name | ชื่อกลุ่ม</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="กลุ่มแรก"
        v-model="name"
        @input="clearErr"
      />
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
        @select="validate"
      ></multiselect>
    </div>
    <div class="form-group">
      <label for="phone">Section | ช่วงเวลา</label>
      <select class="custom-select mr-sm-2" v-model="section" @change="clearErr">
        <option value>เลือกช่วงเวลา...</option>
        <option value="เช้า">ช่วงเช้า</option>
        <option value="บ่าย">ช่วงบ่าย</option>
      </select>
    </div>
    <div class="btn-group pt-5">
      <button type="button" id="add-btn" class="btn mover-btn thai" @click="addGroup">บันทึกข้อมูล</button>
    </div>
    <div
      id="alertModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center flex-column align-items-center">
            <p>
              <span class="text-danger">{{ stdName }}</span> ได้อยู่ในกลุ่ม
              <span class="text-danger">{{ groupName }}</span>
            </p>
            <p>
              แน่ใจว่าจะเพิ่ม
              <span class="text-danger">{{ stdName }}</span> เข้ากลุ่มนี้ ?
            </p>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" id="noBtn" class="btn mover-btn" @click="removeOption">ไม่</button>
            <button type="button" id="yesBtn" class="btn mover-btn" @click="acceptOption">ตกลง</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/* eslint-disable no-undef */
import Multiselect from 'vue-multiselect'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  components: {
    Multiselect
  },
  mounted () {
    let managerRef = firebase
      .firestore()
      .collection('managers')
      .doc(this.$store.state.uid)
    managerRef
      .collection('students')
      .get()
      .then(snapshot => {
        snapshot.forEach(data => {
          let tmpOption = {
            sid: data.id,
            name:
              data.data().prefix + data.data().fname + ' ' + data.data().lname
          }
          this.options.push(tmpOption)
        })
      })
  },
  data () {
    return {
      name: '',
      section: '',
      value: [],
      options: [],
      errMsg: '',
      stdName: '',
      groupName: ''
    }
  },
  methods: {
    addGroup () {
      let managerRef = firebase.firestore().collection('managers').doc(this.$store.state.uid)
      if (this.name !== '' && this.section !== '' && this.value.length !== 0) {
        let selects = []
        this.value.forEach(data => {
          selects.push(data.sid)
        })
        managerRef
          .collection('student-groups')
          .add({
            name: this.name,
            section: this.section,
            students: selects
          })
          .then(() => {
            this.$router.replace({ path: '/dashboard/student/group' })
          })
      } else {
        this.errMsg = '** โปรดกรอกข้อมูลให้ครบถ้วน'
      }
    },
    validate (value) {
      firebase
        .firestore()
        .collection('managers')
        .doc(this.$store.state.uid)
        .collection('student-groups')
        .get()
        .then(snapshot => {
          snapshot.forEach(data => {
            if (data.data().students.includes(value.sid)) {
              this.stdName = value.name
              this.groupName = data.data().name
              $('#alertModal').modal('show')
            } else {
              this.errMsg = ''
            }
          })
        })
    },
    removeOption () {
      const index = this.value.findIndex(item => {
        return item.name === this.stdName
      })
      this.value.splice(index, 1)
      $('#alertModal').modal('hide')
      this.clearErr()
    },
    acceptOption () {
      $('#alertModal').modal('hide')
      this.clearErr()
    },
    clearErr () {
      this.errMsg = ''
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
  background: #f3f3f3;
  color: #35495e;
  font-weight: bold;
}
.multiselect__option--selected:after {
  content: attr(data-selected);
  color: silver;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: #ff6a6a;
  color: #fff;
}
</style>

<style scoped>
#yesBtn {
  background: linear-gradient(180deg, rgba(33, 149, 186, 1) 0%);
}
#noBtn {
  background: gray;
}
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
