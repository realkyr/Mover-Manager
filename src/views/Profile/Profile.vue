<template>
  <div>
    <Searchbar/>
    <Sidebar/>
    <div class="inside-container">
      <div class="content rounded">
        <div class="row">
          <div class="col">
            <h4 class="thai ml-4 mt-3">โปรไฟล์</h4>
          </div>
          <!-- <div class="col-2 d-flex justify-content-center align-item-center">
              <router-link :to="{ name: 'edit-profile' }" >
                <button type="button" class="btn thai">Edit Profile</button>
              </router-link>
          </div>-->
        </div>
        <!-- <div class="profile">
            <img src="../../assets/holder/profileholder.png">
        </div> -->
        <!-- <button type="button" id="qrBtn" class="btn thai" data-toggle="modal" data-target="#qrModal">
            <i style="position: initial; color: white;" class="fas fa-qrcode"></i>ดูคิวอาร์โค้ด
        </button>-->
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
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
          <div class="col-6 d-flex justify-content-center align-items-center flex-column">
            <div class="align-self-end">
              <router-link :to="{ name: 'edit-profile' }">
                <button type="button" class="btn thai">Edit Profile</button>
              </router-link>
            </div>
            <div class="profile">
              <img src="../../assets/holder/profileholder.png">
            </div>
            <button
              type="button"
              id="qrBtn"
              class="btn thai"
              data-toggle="modal"
              data-target="#qrModal"
            >
              <i style="position: initial; color: white;" class="fas fa-qrcode"></i>ดูคิวอาร์โค้ด
            </button>
            <div class="input-control thai">
              <div class="my-output-control">
                <span>
                  <i class="fas fa-envelope" aria-hidden="true"></i>อีเมล:
                </span>
              </div>
              <div class="my-output-control">
                <span>
                  <i class="fas fa-user-circle" aria-hidden="true"></i>ชื่อ:
                </span>
              </div>
              <div class="my-output-control">
                <span>
                  <i class="fas fa-envelope" aria-hidden="true"></i>นามสกุล:
                </span>
              </div>
              <div class="my-output-control">
                <span>
                  <i class="fas fa-mobile-alt" aria-hidden="true"></i>เบอร์โทรศัพท์:
                </span>
              </div>
            </div>
          </div>
          <div class="vl"></div>
          <div class="col d-flex justify-content-center align-items-center">
            <Map/>
          </div>
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
    return {}
  },
  methods: {}
}
</script>

<style>
.content {
  padding: 20px;
  background: white;
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

input[type="tel"]:focus + i {
  color: #2094b9;
}

input[type="text"]:focus + i {
  color: #2094b9;
}

input[type="password"]:focus + i {
  color: #2094b9;
}

.my-output-control {
  margin: 1rem 0 0 0;
}

.profile img {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: 150px;
  border-radius: 20px;
}
</style>

<style scoped>
.inside-container {
  padding: 20px;
  height: calc(100vh - 50pt);
}
.input-control {
  position: relative;
  margin: 2rem 0 2rem 0;
  padding: 0 4rem 0 4rem;
  width: 100%;
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

.btn-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  margin: 1rem auto 1rem auto;
}

.btn {
  margin: 10px 0 0 0;
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
