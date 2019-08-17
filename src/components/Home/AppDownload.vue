<template>
  <div class="content">
    <div class="col">
      <div class="row justify-content-center">
        <h2>Mover Driver</h2><br>
      </div>
      <div class="row justify-content-center">
        <h4>Download app from</h4>
      </div>
      <div class="row justify-content-center">
        <div class="application" @click="toPlayStore">
          <span><i class="fab fa-google-play"></i> &nbsp; Play Store</span>
        </div>
        <div style="color: #c6c6c6;background: #fafafa;border-color: #c6c6c6" class="application" id="appstore">
          <i class="fab fa-apple"></i> &nbsp; Coming Soon
        </div>
      </div>
    </div>
    <div class="vl"></div>
    <div class="col">
      <div class="row justify-content-center">
        <h2>Mover Parent</h2><br>
      </div>
      <div class="row justify-content-center">
        <h4>Download app from</h4>
      </div>
      <div class="row justify-content-center">
        <div class="application soon">
          <i class="fab fa-google-play"></i> &nbsp; Coming Soon
        </div>
        <div style="color: #c6c6c6;background: #fafafa;border-color: #c6c6c6" class="application" id="appstore">
          <i class="fab fa-apple"></i> &nbsp; Coming Soon
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPlayStore () {
      window.open('https://play.google.com/store/apps/details?id=com.moversafety.driver', '_blank')
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);
.vl {
  height: 15rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #fafafa;
  padding-top: 5em;
  padding-bottom: 5em;
}

h2 {
  font-weight: 400;
}

h4 {
  font-weight: 400;
}

.application {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  padding: 1.4em 0em 1.4em 0em;
  margin-top: 3em;
  cursor: pointer;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  height: 35px;
  border-color: #1b82a5;
  color: #1b82a5;
}

#appstore {
  color: #ffffff;
  background: #1b82a5;
}

.application:first-child {
  margin-right: 20px;
}

.soon {
  border-color: #c6c6c6;
  color: #c6c6c6;
}

@media screen and (max-width: 576px){
  .application {
    width: 140px;
    font-size: 10pt;
  }
  .content {
    flex-direction: column;
  }
  .vl {
    height: 0;
    width: 100% ;
    margin: 3rem 0 5rem 0;
    border-top: 1px solid #d3d3d3;
  }
}

#appstore i {
  font-size: 1.5em;
}
</style>
