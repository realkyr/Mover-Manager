<template>
  <div class="blueBar row">
    <div class="container">
      <div class="col-xs-10 col-sm-8 col-lg-6">
        <p style="font-size: 16pt; margin-bottom: 5px;">วิสัยทัศน์</p>
        <h2>Our Vision</h2>
        <p class="content">
          มุ่งสู่การเป็นผู้ให้บริการเทคโนโลยีสมัยใหม่แก่ตลาดการศึกษา (Educational Industry)
          อย่างมีคุณภาพและใช้งานได้จริงในทุก ๆ ภาคส่วน
        </p>
      </div>
    </div>
    <img src="../../assets/pics/busScribble.png" />
  </div>
</template>

<style scoped>
.row {
  margin-right: 0;
}
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
