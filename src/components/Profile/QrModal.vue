<template>
  <div
    class="modal fade"
    id="qrModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="qrModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="qrModalLongTitle">My QR Code</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div v-if="qrImg === null" class="myQr"></div>
          <div v-else>
            <img :src="qrImg">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
  data () {
    return {
      qrImg: this.getQr()
    }
  },
  methods: {
    getQr () {
      if ('url' in this.$store.state.user) {
        firebase.storage().ref().child(this.$store.state.user.url).getDownloadURL()
          .then(url => {
            this.qrImg = url
          })
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.myQr {
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  background: #aaa;
  margin: auto;
}
</style>
