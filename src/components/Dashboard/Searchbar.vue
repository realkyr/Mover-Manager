<template>
  <vs-row class="searchbar">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="2" vs-sm="1" vs-lg="1">
      <img id="logo" src="../../assets/logo/logo.png">
    </vs-col>
    <vs-col vs-w="5" vs-type="flex" vs-align="center">
      <div class="search-input">
        <input class="thai" type="text" placeholder="ค้นหารถ, นักเรียน">
        <i class="fas fa-search" aria-hidden="true"></i>
      </div>
    </vs-col>
    <vs-col vs-offset="3" vs-w="2" vs-type="flex" vs-justify="flex-end" vs-align="center">
      <div class="avatar">
        <span class="dname">{{ displayName }}</span>
        <button class="btn" href="#"><i class="fas fa-user"></i></button>
      </div>
    </vs-col>
    <!-- <vs-col vs-w="1"></vs-col> -->
  </vs-row>
</template>

<script>
export default {
  data () {
    return {
      displayName: 'Phuree K'
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
  width: 100pt;
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
</style>
