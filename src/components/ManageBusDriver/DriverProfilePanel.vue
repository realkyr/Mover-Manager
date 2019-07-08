<template>
  <div class="container-fluid mt-3 p-3 rounded buspanel">
    <div class="row mb-1 d-flex align-items-center justify-content-between">
      <div class="row col-auto d-flex align-items-center">
        <div class="col-auto image-section">
          <img
            v-if="!pic"
            class="rounded-circle"
            type="image/webp"
            src="../../assets/pics/profile-placeholder.webp"
          >
          <img
            v-else
            class="rounded-circle"
            :src="pic"
          >
        </div>
        <div class="col-auto">
          <h5>{{ $store.state.drivers[$route.params.duid].prefix }}
            {{ $store.state.drivers[$route.params.duid].fname }} {{ $store.state.drivers[$route.params.duid].lname }}
          </h5>
          <small>{{ $store.state.drivers[$route.params.duid].uid }}</small>
        </div>
      </div>
      <div class="col-auto">
        <router-link
          to="/dashboard/drivers/"
          tag="button"
          class="btn mover-btn thai"
        >
          <i style="color: white;" class="fas fa-backward mr-1"></i>ย้อนกลับ
        </router-link>
      </div>
    </div>
    <hr>
    <Form
      :duid="$route.params.duid"
      @onUploaded="setPic"
    />
  </div>
</template>

<script>
import Form from './DriverUpdate/Form'
export default {
  components: {
    Form
  },
  mounted () {
    if (Object.keys(this.$store.state.drivers).length === 0) {
      this.$router.go(-1)
    }
    this.pic = this.$route.params.tmpImg
  },
  data () {
    return {
      pic: null,
      duid: this.$route.params.duid
    }
  },
  methods: {
    setPic (value) {
      this.pic = value
    }
  }
}
</script>

<style scoped>
.image-section {
  width:auto;
  text-align:center;
  padding:15px;
}

.image-section img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.buspanel {
  height: auto;
}
</style>
