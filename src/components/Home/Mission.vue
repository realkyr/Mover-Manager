<template>
  <div>
    <div class="container">
      <vs-row vs-w="12" vs-type="flex" vs-justify="center">
        <h2 id="title">Mover Features</h2>
      </vs-row>
      <vs-row vs-w="12">
        <vs-col vs-type="flex" class="cardRight" vs-sm="12" vs-lg="6">
          <div class="card">
            <img src="../../assets/pics/forschool.jpg">
            <h3>For School</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi rem eaque reprehenderit veritatis perspiciatis,
              repellat consectetur iste accusantium sit ab
            </p>
          </div>
        </vs-col>
        <vs-col vs-type="flex" class="cardLeft" vs-sm="12" vs-lg="6">
          <div class="card">
            <img src="../../assets/pics/forparent.jpg">
            <h3>For Parent</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi rem eaque reprehenderit veritatis perspiciatis,
              repellat consectetur iste accusantium sit ab
            </p>
          </div>
        </vs-col>
      </vs-row>
      <vs-row vs-w="12" class="top">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-offset="1"
          vs-xs="12"
          vs-sm="5"
          vs-lg="5"
          class="textContainer"
        >
          <h2>Mission&Believe</h2>
          <p class="content thai">
            <ul>
              <li>เพื่อขับเคลื่อนการบริการทางด้านการศึกษาให้มีประสิทธิภาพ เหมาะกับการเป็นสถานศึกษาสมัยใหม่ 4.0</li>
              <li><p>เพิ่มความปลอดภัยให้กับลูกหลานของผู้ปกครอง <br/>ที่ใช้บริการของสถานศึกษา</p></li>
              <li>ปรับเปลี่ยนโรงเรียนหรือสถานศึกษา(Digital Transformation)จากระบบการจัดการแบบเก่า ไปสู่ระบบการจัดการที่ทันสมัย</li>
              <li>เป็นตัวช่วยพัฒนาคุณภาพของสถานศึกษา โดยการจัดหาเทคโนโลยีที่เหมาะสมกับปัญหานั้นๆ</li>
            </ul>
          </p>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-xs="12"
          vs-sm="6"
          vs-lg="6"
          class="imgContainer"
        >
          <img style="z-index: -1" src="../../assets/pics/imgmission.jpg">
        </vs-col>
      </vs-row>
    </div>
    <div class="mapbanContain">
      <img id="mapbanner" src="../../assets/pics/mapbanner.jpg">
      <img id="iphone" src="../../assets/pics/iphone.png">
      <div class="thai onbanner">
        <h2>ใช้งานได้เลย
          <br>ไม่ต้องติดตั้งอุปกรณ์
        </h2>
        <p>
          แค่ลงทะเบียนแล้วทำตามขั้นตอน
          คุณก็สามารถติดตามรถรับส่งของคุณได้ง่ายๆ
          ผ่านมือถือของผู้ขับ
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 600;
  font: bolder;
  margin: 0;
}

.mapbanContain {
  position: relative;
  overflow: hidden;
}

.onbanner br {
  display: none;
}

.onbanner {
  color: white;
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 350px;
  text-align: center;
}

#iphone {
  max-height: calc(100% - 1em);
  position: absolute;
  bottom: 8px;
  left: 28%;
}

#mapbanner {
  position: relative;
  left: 0;
  width: 100vw;
  z-index: -1;
}

#title:after {
  position: relative;
  background: #1f95ba;
  width: 50%;
  margin: 15px auto 20px auto;
  height: 8px;
  display: block;
  border-radius: 15px;
  content: "";
}

h3 {
  font-weight: 500;
}

.container {
  padding: 5em;
}

.cardRight {
  justify-content: flex-end;
}

.cardLeft {
  justify-content: flex-start;
}

.card {
  background: white;
  box-shadow: 0 0 6px #ccc;
  border-radius: 10px;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  flex-direction: column;
  margin-top: 1em;
}

.card:first-child {
  margin-right: 20px;
}

.card:last-child {
  margin-left: 20px;
}

.card img {
  max-width: 80px;
  margin: 20px;
}

.card p {
  font-size: 0.7em;
  text-align: center;
  color: rgb(77, 77, 77);
  margin-top: 10px;
}

.imgContainer img {
  max-height: 250px;
}

.top {
  padding: 6em 0em;
}

@media screen and (max-width: 900px) {
  .onbanner {
    bottom: 20%;
    right: 5%;
    width: 350px;
  }

  .cardRight {
    justify-content: center;
  }

  .cardLeft {
    justify-content: center;
  }

  .imgContainer img {
    max-height: 200px;
  }
}

@media screen and (max-width: 768px) {
  #iphone {
    left: 10%;
  }

  #mapbanner {
    position: relative;
    left: -50%;
    max-height: 350px;
    width: auto;
  }
  .container {
    padding: 2em;
  }

  .imgContainer img {
    max-height: 150px;
  }

  .top {
    padding: 2em 0em;
  }

  .textContainer p {
    font-size: 1em;
  }
}

.content {
  margin-top: 20px;
}

.textContainer {
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .imgContainer img {
    margin-top: 80px;
  }
}

@media screen and (max-width: 450px) {
  #iphone {
    left: 3%;
    max-height: calc(100% - 5em);
  }

  .onbanner {
    top: 50%;
    transform: translateY(-80%);
    right: 3%;
    width: calc(100% - 17em);
    font-size: 0.8em;
  }

  br {
    display: block;
  }
}
</style>
