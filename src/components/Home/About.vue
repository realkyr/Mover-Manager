<template>
  <div>
    <div class="row top">
      <div class="col-6 imgContainer">
        <img src="../../assets/pics/aboutus.jpg" />
      </div>
      <div class="col-6 about-content">
        <p style="font-size: 18pt" class="thai">เกี่ยวกับเรา</p>
        <h2>About Mover</h2>
        <p class="content thai">
          เราคือบริษัทที่ให้บริการซอฟต์แวร์ชนิดใช้งานในโรงเรียน
          เพื่อเพิ่มประสิทธิภาพของฝ่ายบริหารและปฏิบัติการของแผนกต่างๆของโรงเรียนผู้ใช้บริการ
          ทั้งในภาคฝ่ายบริหารการศึกษาและฝ่ายบริการการศึกษา
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.top {
  width: 100%;
  padding: 8em 0em 8em 0em;
}
img {
  max-height: 380px;
}

@media screen and (max-width: 1124px){
  img {
    max-height: 320px;
  }
}

@media screen and (max-width: 768px){
  img {
    max-height: 220px;
  }

  .top {
    padding: 2em 0em;
  }

  .textContainer {
    padding: 1em 2em;
  }

  .textContainer p {
    font-size: 1em;
  }
}

@media screen and (max-width: 576px){
  img {
    max-height: 180px;
  }
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

h2 {
  font-weight: 700;
}

.content {
  margin-top: 20px;
  font-size: 1.2em;
}

.textContainer {
  flex-direction: column;
}

.about-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
