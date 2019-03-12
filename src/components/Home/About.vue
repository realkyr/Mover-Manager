<template>
  <div>
    <vs-row vs-w="12" class="top">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-xs="12"
        vs-sm="6"
        vs-lg="6"
        class="imgContainer"
      >
        <img src="../../assets/pics/aboutus.jpg" />
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-xs="12" vs-sm="6"
        vs-lg="5"
        class="textContainer"
      >
        <p style="font-size: 18pt" class="thai">เกี่ยวกับเรา</p>
        <h2>About Mover</h2>
        <p class="content thai">
          เราคือบริษัทที่ให้บริการซอฟต์แวร์ชนิดใช้งานในโรงเรียน
          เพื่อเพิ่มประสิทธิภาพของฝ่ายบริหารและปฏิบัติการของแผนกต่างๆของโรงเรียนผู้ใช้บริการ
          ทั้งในภาคฝ่ายบริหารการศึกษาและฝ่ายบริการการศึกษา
        </p>
      </vs-col>
    </vs-row>
  </div>
</template>

<style scoped>
.top {
  padding: 8em 0em;
}
img {
  max-height: 400px;
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
</style>
