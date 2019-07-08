<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">คุณแน่ใจว่าจะลบรถ {{ busID }} | {{ plate }} ?</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
          <button type="button" @click="closeModal" class="btn btn-danger" data-dismiss="modal">แน่ใจ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapActions } from 'vuex'
export default {
  props: {
    busID: {
      type: String,
      default: ''
    },
    plate: {
      type: String,
      default: ''
    },
    uid: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions(['setBuses']),
    closeModal () {
      console.log({ uid: this.uid })
      firebase.firestore().collection('managers').doc(this.$store.state.uid)
        .collection('cars').doc(this.uid).delete().then(() => {
          this.$emit('onDelete', this.uid)
          // firebase.firestore().collection('managers').doc(this.$store.state.uid)
          //   .collection('cars').get().then(snapshot => {
          //     let currentBuses = {}
          //     snapshot.forEach(data => {
          //       currentBuses[data.id] = data.data()
          //     })
          //     this.setBuses(currentBuses)
          //   })
        })
    }
  }
}
</script>
