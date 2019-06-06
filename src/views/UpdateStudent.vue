<template>
  <div class="box">
    <div class="logo-container">
      <img id="logo" src="../assets/logo/logo.png">
    </div>
    <div style="text-align: center;">
      <p class="thai" id="title-info">ข้อมูลนักเรียน</p>
    </div>
    <div class="input-control">
      <div class="my-input-control">
        <input v-model="studentID" class="thai" type="text" placeholder="เลขประจำตัว">
        <i class="far fa-address-card" aria-hidden="true"></i>
      </div>
      <div class="my-input-control mb-3"  style="font-size: 0.8em;">
        <i class="far fa-clock" aria-hidden="true"></i>
        <select v-model="gender" class="thai ml-5 mt-3">
          <option :value="null">---------- โปรดเลือกคำนำหน้า -----------</option>
          <option :key="g" :value="g.id" v-for="g in genders">{{ g.name }}</option>
        </select>
      </div>
      <div class="my-input-control">
        <input v-model="fname" class="thai" type="text" placeholder="ชื่อ">
        <i class="fas fa-user-circle" aria-hidden="true"></i>
      </div>
      <div class="my-input-control">
        <input v-model="lname" class="thai" type="text" placeholder="นามสกุล">
        <i class="fas fa-user" aria-hidden="true"></i>
      </div>
      <div class="my-input-control">
        <input v-model="phone" class="thai" type="text" placeholder="เบอร์โทรศัพท์">
        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" id="save" class="btn thai" @click="save">บันทึก</button>
      <button type="button" id="delete" class="btn thai" @click="remove">ลบ</button>
      <button type="button" id="back" class="btn thai" @click="cancel">ยกเลิก</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'students-updating-console',
  metaInfo: {
    title: 'Update Student | Mover'
  },
  data () {
    return {
      studentID: '',
      gender: null,
      genders: [
        { name: 'นาย', id: 1 },
        { name: 'นางสาว', id: 2 },
        { name: 'นาง', id: 3 },
        { name: 'เด็กชาย', id: 4 },
        { name: 'เด็กหญิง', id: 5 }
      ],
      fname: '',
      lname: '',
      phone: ''
    }
  },
  methods: {
    save () {
      if (this.studentID === '' || this.gender === null ||
      this.fname === '' || this.lname === '' || this.phone === '') {
        alert('โปรดกรอกข้อมูลให้ครบถ้วน')
      } else {
        this.$router.replace('../student')
      }
    },
    cancel () {
      this.$router.replace('../student')
    },
    remove () {
      this.$router.replace('../student')
    }
  }
}
</script>

<style scoped>

.box {
  background: white;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 480px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

#logo {
  width: 50px;
  align-self: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
  width: 100%;
}

.my-input-control {
  position: relative;
}

i {
  position: absolute;
  left: 5pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}

input {
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  overflow-x: hidden;
  border: 1pt solid rgb(234, 234, 234);
  border-radius: 18px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 10pt;
  -webkit-appearance: none;
}

input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

.input-control {
  position: relative;
  margin: 15px 0 15px 0;
  width: 100%;
  padding: 0 70px 0 70px;
}

#save {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 10px 0;
}

#save:hover {
  box-shadow: none;
}

#delete {
  background: linear-gradient(180deg, rgb(255, 0, 0) 0%, rgb(182, 10, 10) 100%) !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 10px 0;
}

#delete:hover {
  box-shadow: none;
}

#back {
  color: black !important;
  background: white !important;
  /* background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important; */
  border-radius: 18px;
  width: 100%;
}

#back:hover {
  background: #d3d3d3;
}

.btn-group {
  display: flex;
  /* margin: 0 15px 0 15px; */
  justify-content: center;
  flex-direction: column;
  padding: 0 70px 0 70px;
}

.btn {
  margin: 10px 0 10px 0;
  color: white;
  border-radius: 18px !important;
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%) !important;
}

@media screen and (max-width: 576px) {
  .box {
    transform: translate(-43%, -50%);
  }
}

</style>
