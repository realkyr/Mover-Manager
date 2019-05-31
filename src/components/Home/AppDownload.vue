<template>
  <div class="content">
    <div class="row justify-content-center">
      <h2>Coming Soon!</h2><br>
    </div>
    <div class="row justify-content-center">
      <h4>Download app from</h4>
    </div>
    <div class="row justify-content-center">
      <div class="application">
        <i class="fab fa-google-play"></i> &nbsp; Play Store
      </div>
      <div class="application" id="appstore">
        <i class="fab fa-apple"></i> &nbsp; App Store
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

@media screen and (min-width: 400px){
  .application:first-child {
    margin-right: 20px;
  }
}

#appstore i {
  font-size: 1.5em;
}
</style>
