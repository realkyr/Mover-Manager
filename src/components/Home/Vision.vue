<template>
  <!-- <vs-row class="blueBar"> -->
  <div class="blueBar row">
    <!-- <vs-col vs-offset="1" vs-xs="10" vs-sm="8" vs-lg="6"> -->
    <div class="col xs-10 sm-8 lg-6 offset-1">
      <p style="font-size: 16pt;">วิสัยทัศน์</p>
      <h2>Our Vision</h2>
      <p class="content">
        มุ่งสู่การเป็นผู้ให้บริการเทคโนโลยีสมัยใหม่แก่ตลาดการศึกษา (Educational Industry)
        <br />
        อย่างมีคุณภาพและใช้งานได้จริงในทุกๆ ภาคส่วน
      </p>
    <!-- </vs-col> -->
    </div>
    <img src="../../assets/pics/busScribble.png" />
  <!-- </vs-row> -->
  </div>
</template>

<style scoped>
.blueBar {
  background: #2094b9;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: -1;
  overflow: hidden;
}

img {
  max-height: auto;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.content {
  font-size: 1.2em;
  margin-top: 5px;
  z-index: 1;
}

@media screen and (max-width: 425px) {
  img {
    right: -20%;
  }
  .content {
    font-size: 0.8em;
    text-align: center;
  }

  p,
  h2 {
    text-align: center;
  }
}

p,
h2 {
  font-family: 'Prompt', sans-serif;
  color: #fff;
}

h2 {
  font-weight: 700;
}
</style>
