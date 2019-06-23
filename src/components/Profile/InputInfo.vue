<template>
  <div class="mb-2">
    <input
      v-model="info"
      class="input-info thai"
      :type="type"
      :placeholder="placeholder"
    >
    <small v-show="err" style="color:red;" class="alert-text thai">{{ err }}</small>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    initialValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      info: this.initialValue,
      infoType: this.type,
      err: ''
    }
  },
  methods: {
    checkValidate () {
      if (this.infoType === 'email' && !this.info.includes('@')) {
        this.err = 'โปรดกรอกอีเมลให้ถูกต้อง'
        return false
      } else if (this.infoType === 'phone' && this.info.length < 10) {
        this.err = 'โปรดใส่เบอร์ให้ถูกต้อง'
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
.input-info {
  position: relative;
  width: 170px;
  -webkit-appearance: none;
  overflow-x: hidden;
  border: 1pt solid rgb(234, 234, 234);
  border-radius: 18px;
  outline: none;
  margin: 0px;
  padding: 5px 5px 5px 10px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 10pt;
  -webkit-appearance: none;
}
input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}
input[type="tel"]:focus + i {
  color: #2094b9;
}
input[type="text"]:focus + i {
  color: #2094b9;
}
input[type="password"]:focus + i {
  color: #2094b9;
}
</style>
