<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar/>
    <div class="inside-container thai">
      <span>บัญชีผู้ใช้</span>
      <div class="content rounded mt-3">
        <!-- Modal -->
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
                <button type="button" class="close mover-btn thai" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="myQr"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-2 pt-2 pb-2">
          <div class="col d-flex justify-content-center align-items-center flex-column p-0">
            <div class="profile">
              <img src="../../assets/holder/profileholder.png">
            </div>
            <!-- <button type="button" class="btn mover-btn thai">เปลี่ยนรูปโปรไฟล์</button> -->
            <input type="file" ref="file" style="display: none">
            <button class="btn mover-btn thai" @click="$refs.file.click()">เปลี่ยนรูปโปรไฟล์</button>
            <button
              type="button"
              id="qrBtn"
              class="btn mover-btn thai"
              data-toggle="modal"
              data-target="#qrModal"
            >
              <i style="position: initial; color: white;" class="fas fa-qrcode"></i>ดูคิวอาร์โค้ด
            </button>
            <div class="d-flex justify-content-center mt-4">
              <div class="col- d-flex flex-column">
                <span class="mb-3">
                  <i class="fas fa-envelope" aria-hidden="true"></i>อีเมล:
                </span>
                <span class="mb-3">
                  <i class="fas fa-envelope" aria-hidden="true"></i>ชื่อ:
                </span>
                <span class="mb-3">
                  <i class="fas fa-envelope" aria-hidden="true"></i>นามสกุล:
                </span>
                <span class="mb-3">
                  <i class="fas fa-envelope" aria-hidden="true"></i>เบอร์โทรศัพท์:
                </span>
              </div>
              <div class="col d-flex flex-column">
                <span class="mb-4">{{ email }}</span>
                <span class="mb-4">{{ fname }}</span>
                <span class="mb-4">{{ lname }}</span>
                <span class="mb-4">{{ phone }}</span>
              </div>
              <div class="col d-flex flex-column p-0">
                <span class="mb-3"><i class="fas fa-edit text-danger"></i></span>
                <span class="mb-3"><i class="fas fa-edit text-danger"></i></span>
                <span class="mb-3"><i class="fas fa-edit text-danger"></i></span>
                <span class="mb-3"><i class="fas fa-edit text-danger"></i></span>
              </div>
            </div>
          </div>
          <div class="vl"></div>
          <div class="col d-flex justify-content-center align-items-center">
            <Map/>
          </div>
        </div>
        <div v-if="isEdit" class="btn-group">
          <button type="button" class="btn mover-btn thai w-100">บันทึก</button>
          <button type="button" id="back" class="btn mover-btn thai">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../../components/Dashboard/Searchbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Map from '../../components/Profile/Map'
export default {
  components: {
    Searchbar,
    Sidebar,
    Map
  },
  mounted () {
    this.$store.state.address = { name: '' }
  },
  data () {
    return {
      email: 'ingkaratt@gmail.com',
      fname: 'ing',
      lname: 'tin',
      phone: '080000000',
      isEdit: true
    }
  },
  methods: {}
}
</script>

<style scoped>
.mover-btn {
  width: 10rem;
}
.mover-btn i {
  padding: 0 5px 0 0;
}
i {
  position: initial;
  left: 16pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}
.header {
  font-size: 14pt;
}
.list-group {
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}
.btn {
  margin: 0;
  padding: 0;
  color: white;
  border-radius: 18px !important;
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
}
.active {
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  );
}
.col-3 {
  max-width: 20%;
}
#back {
  color: black !important;
  background: white !important;
  border-radius: 18px;
  width: 100%;
  margin: 10px 0 0 0;
}
#back:hover {
  background: #d3d3d3 !important;
}
#qrBtn {
  background: #f26b27 !important;
  border: none;
  display: block;
  margin: 10px auto;
  /* height: 35px; */
  padding: 5px;
}
.myQr {
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  background: #aaa;
  margin: auto;
}
</style>
