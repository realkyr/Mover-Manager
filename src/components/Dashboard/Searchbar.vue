<template>
  <div class="container-fluid">
    <div class="searchbar row">
      <div class="ml-3 col-1 mt-3 d-flex justify-content-center">
        <img id="logo" src="../../assets/logo/logo.png">
      </div>
      <div class="col-8 ml-1 ml-md-4 mt-2 d-flex align-items-center">
        <div class="search-input">
          <input class="thai" type="text" placeholder="ค้นหารถ, นักเรียน">
          <i class="fas fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div class="
        col-2 col-sm-2
        mt-2
        ml-md-0 ml-sm-1
        d-flex justify-content-center justify-content-md-end
        align-items-center
      ">
        <div class="avatar">
          <span class="dname">{{ displayName }}</span>
          <button
            id="dropdownMenu"
            data-toggle="dropdown"
            class="btn fa-lg p-1"
            @click="dropToggle"
          >
            <i class="fas fa-user"></i>
          </button>
          <!-- dropdown profile menu -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenu">
            <router-link to="/dashboard/profile" >
              <button class="dropdown-item text-decoration-none" type="button">My Profile</button>
            </router-link>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" type="button" @click="logout">Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      isDrop: false,
      displayName: this.getDisplayName()
    }
  },
  methods: {
    ...mapGetters([
      'getUser'
    ]),
    ...mapActions(['clearUser']),
    getDisplayName () {
      if (this.$store.state.user !== undefined) {
        return `${this.getUser().fname} ${this.getUser().lname}`
      }
    },
    logout () {
      this.clearUser()
      this.$router.replace({ path: '/login' })
    },
    dropToggle () {
      this.isDrop = !this.isDrop
    }
  }
}
</script>

<style scoped>

.dname {
  display: inline-block;
  font-size: 9pt;
}

.avatar {
  position: absolute;
  width: 90pt;
  background: white;
  border-radius: 20px;
  padding: 4pt;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 0.5pt solid rgb(236, 235, 243);
}

.btn {
  display: inline-block;
  line-height: 10px;
  height: 18pt;
  width: 18pt;
  border-radius: 50%;
  border: 0.5pt solid rgb(236, 235, 243);
}

.btn i {
  font-size: 8pt;
}

.searchbar {
  height: 50pt;
  background: white;
  border-bottom: 0.5pt solid rgb(236, 235, 243);
}

#logo {
  max-height: 26.7pt;
}

input {
  width: 100%;
  -webkit-appearance: none;
  overflow-x: hidden;
  border: 1pt solid rgb(234, 234, 234);
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input:focus {
  border-color: #2094b9;
  box-shadow: 0 0 8px 0 #2094b9;
}

.search-input input[type="text"] {
  padding-left: 40px;
  font-size: 10pt;
  -webkit-appearance: none;
}

.search-input {
  position: relative;
  width: 100%;
}

.search-input i {
  position: absolute;
  left: 5pt;
  top: 12px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
  font-size: 10pt;
}

.search-input input[type="text"]:focus + i {
  color: #2094b9;
}

.search-input.inputIconBg i {
  background-color: #aaa;
  color: #fff;
  padding: 9px 4px;
  border-radius: 4px 0 0 4px;
}

.search-input.inputIconBg input[type="text"]:focus + i {
  color: #fff;
  background-color: #2094b9;
}

.dropdown-item {
  font-size: 10pt;
}

.dropdown-menu {
  border-radius: 10px;
  transform: translate(0%, 38%) !important;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

@media screen and (max-width: 576px) {
  .dname {
    display: none;
  }

  .avatar {
    width: 40px;
  }

  .search-input i {
    padding: 9px 4px 9px 4px;
  }

  .search-input input[type="text"] {
    padding-left: 30px;
  }
}
</style>
