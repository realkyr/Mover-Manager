<template>
  <div>
    <div class="mission-content container-fluid">
      <div class="d-flex justify-content-center">
        <h2 id="title">Mover Features</h2>
      </div>
      <div class="row">
        <div class="
          col-12
          col-sm-12
          col-md-6
          col-lg-6
          d-flex
          justify-content-md-start
          justify-content-center
        ">
          <div class="card">
            <img src="../../assets/pics/forparent.jpg">
            <h3>For Parent</h3>
            <p style="font-size:10pt;" class="thai">
              แอปพลิเคชันส่วนตัวสำหรับผู้ปกครอง เพิ่มความมั่นใจและความปลอดภัยในการใช้บริการรถรับส่ง
               โดยสามารถเข้าถึงตำแหน่งของรถโรงเรียนที่บุตรหลานของท่านกำลังนั่งอยู่ได้
               ซึ่งข้อมูลจากแอปฯนี้จะลิ้งค์เข้ากับระบบส่วนกลางของโรงเรียนเพื่อการดูแลที่ทั่วถึงกับนักเรียนทุกคน
            </p>
          </div>
        </div>
        <div class="
          col-12
          col-sm-12
          col-md-6
          col-lg-6
          d-flex
          justify-content-md-start
          justify-content-center
        ">
          <div class="card">
            <img src="../../assets/pics/forschool.jpg">
            <h3>For School</h3>
            <p style="font-size:10pt" class="thai">
              ระบบมอนิเตอร์ริ่งเพื่อเพิ่มประสิทธิภาพการดูแลและจัดการรถโรงเรียน ช่วยเชื่อมต่อข้อมูลตำแหน่งรวมถึงข้อมูลส่วนบุคคลของผู้ขับขี่
              และยานพาหนะทั้งหมดที่ใช้รับส่งนักเรียนเข้าด้วยกันให้คุณครูและผู้ปกครองสามารถทราบถึงสถานะของบุตรหลานได้แบบเรียลไทม์
              และง่ายดายยิ่งขึ้น
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid top">
        <div class="row">
          <div class="textContainer col-12 col-md-6 d-flex justify-content-center">
            <div class="container">
              <h2>Mission & Believe</h2>
              <p class="content thai">
                <ul>
                  <li>เพื่อขับเคลื่อนการบริการทางด้านการศึกษาให้มีประสิทธิภาพ เหมาะกับการเป็นสถานศึกษาสมัยใหม่ 4.0</li>
                  <li><p>เพิ่มความปลอดภัยให้กับลูกหลานของผู้ปกครอง <br/>ที่ใช้บริการของสถานศึกษา</p></li>
                  <li>ปรับเปลี่ยนโรงเรียนหรือสถานศึกษา (Digital Transformation) จากระบบการจัดการแบบเก่า ไปสู่ระบบการจัดการที่ทันสมัย</li>
                  <li>เป็นตัวช่วยพัฒนาคุณภาพของสถานศึกษา โดยการจัดหาเทคโนโลยีที่เหมาะสมกับปัญหานั้นๆ</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="
            container-fluid
            col-12 col-md-6
            imgContainer
            d-flex
            justify-content-center
            align-items-center"
          >
            <img style="z-index: -1" src="../../assets/pics/imgmission.jpg">
          </div>
        </div>
      </div>
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

.mission-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5em;
}

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

/* .cardRight {
  justify-content: flex-end;
}

.cardLeft {
  justify-content: flex-start;
} */

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
  max-height: 300px;
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
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .textContainer {
    margin: 0;
  }

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
    max-height: 200px;
  }

  .top {
    padding: 2em 0em;
  }
}

.content {
  font-size: 1.2em;
  margin-top: 20px;
}

.textContainer {
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  .imgContainer img {
    margin-top: 20px;
    margin-bottom: 20px;
    max-height: 200px;
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

  .card {
    margin-right: 0 !important;
    margin-left: 0 !important;
    width: 270px;
    padding: 1em;
  }
}

@media screen and (max-width: 363px){
  .onbanner {
    transform: translateY(-150%);
  }

  .imgContainer img {
    max-height: 150px;
  }
}
</style>
