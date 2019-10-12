<template>
  <div
    class="modal fade"
    id="exampleModalCenter"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Terms & Conditions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body thai pl-4 pr-4">
          <div v-for="i in content" :key="i">
            <p>{{ i }}</p>
          </div>
          <div class="d-flex justify-content-end read-more" @click="readMore">
            <span class="play-store text-primary">อ่านเพิ่มเติม</span>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-tabs */
export default {
  mounted () {
    this.getContent()
  },
  data () {
    return {
      content: []
    }
  },
  methods: {
    getContent () {
      let contents = [
        '1.	ผู้ใช้บริการรับทราบและยอมรับนโยบายด้านการดำเนินธุรกิจ และการปฏิบัติงานของบริษัท ',
        '2.	ผู้ใช้บริการยินยอมที่จะไม่ละเมิดข้อตกลงด้านความประพฤติของเจ้าของบัญชีและผู้ใช้',
        '3.	ผู้ใช้บริการรับทราบและยอมรับข้อตกลงเกี่ยวกับการเข้าถึงข้อมูลของผู้ใช้บริการ ',
        '4.	ผู้ใช้บริการรับทราบและยอมรับข้อตกลงเกี่ยวกับสิทธิ์การใช้งานข้อมูลเพื่อประโยชน์ในการพัฒนาคุณภาพการบริการ'
      ]
      this.content = contents
    },
    readMore () {
      let route = this.$router.resolve({ name: 'terms' })
      window.open(route.href, '_blank')
      // this.$emit('onTerms', true)
    }
  }
}
</script>

<style scoped>
li a {
  text-decoration: none;
}
.read-more:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>
