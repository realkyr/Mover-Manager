<template>
  <div class="Home" style="width: 100%;">
    <div class="container">
      <div class="row mt-3">
        <div class="col d-flex justify-content-end align-items-center">
          <img id="logo" src="../assets/logo/logo.png" />
        </div>
        <div class="col d-flex justify-content-end align-items-end">
          <select class="custom-select thai" v-model="lang">
            <option value="TH">ไทย</option>
            <option value="EN">English</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="thai pl-3 pr-2 mb-5 ml-4 mr-4">
        <div v-if="lang === 'TH'">
          <h3 class="font-weight-bold">Terms and conditions</h3>
          <p class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            &emsp;&emsp;เอกสารหรือบทความต่อไปนี้คือข้อบรรยายที่แจ้งถึงลักษณะของผลิตภัณฑ์ให้ลูกค้าหรือผู้ใช้บริการได้ทราบและตกลงโดยร่วมกัน
            เนื่องจากการเข้าถึงประสิทธิภาพของฟีเจอร์ต่าง ๆ ในแฟลตฟอร์มอันเป็นกรรมสิทธิ์ของทางบริษัท ลูกค้า, ผู้ซื้อ, ผู้ใช้บริการของทางบริษัท
            จำเป็นต้องรับรู้ลักษณะของผลิตภัณฑ์และเข้าใจถึงข้อยินยอมต่าง ๆ อันได้แก่ การให้สิทธิ์การเข้าถึงข้อมูล,
            การยินยอมปฎิบัติตามกฏระเบียบและข้อบังคับเมื่อลงทะเบียนใช้งานผลิตภัณฑ์,
            การยอมรับถึงข้อตกลงการซื้อใช้บริการทางธุรกิจตามที่บริษัทกำหนด,
            การมอบสิทธิ์การใช้งานข้อมูลส่วนบุคคลตามข้อตกลงที่บริษัทกำหนด รวมถึงการขอสงวนสิทธิ์ในหัวข้อบางประการ
          </p>
        </div>
        <div v-else>
          <h3 class="font-weight-bold">Terms and conditions</h3>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;The following documents/articles are the descriptions of the characteristics of our product
            for customers or users to be informed and to make a mutual agreement. Due to the accessibility of various
            features in the platform owned by the company, customers, buyers, and users need to know
            the characteristics of the product and understand the diverse consents including,
            allowing to access information, complying with the rules and regulations when registered to
            the product, accepting the purchase agreement for business services as specified by the company,
            and granting the right to use personal information depending on the agreement set by the company.
          </p>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="font-weight-bold">รูปแบบของผลิตภัณฑ์และบริการของทางบริษัท</h5>
          <p class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            &emsp;&emsp;ภายใต้เครื่องหมายการค้า MOVER ซึ่งนำเสนอผลิตภัณฑ์เกี่ยวกับภาคบริการทางด้านการการศึกษา
            และมีความเกี่ยวข้องกับระบบการทำงานของบุคคลากรหรือตัวนักเรียนนักศึกษา ซึ่งมีขอบข่ายงานปฏิบัติหน้าที่อยู่ในสถานศึกษาต่าง ๆ
            จุดประสงค์เพื่อทำเทคโนโลยีทันสมัย มาพัฒนาปรับปรุงระบบการจัดการของสถานศึกษา อันจะนำมาซึ่งประสิทธิภาพการทำงานที่เพิ่มขึ้น
            ทั้งตัวระบบและโดยรวม
          </p>
        </div>
        <div v-else>
          <h5 class="font-weight-bold">Form of the product and services of the company</h5>
          <p class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            &emsp;&emsp;Under MOVER trademark we provide an educational product which related to school personnel or
            student operation system which has a functional scope in various educational institutions. Our purpose is
            to develop new technology to improve the operating system in educational institutions which leads to
            improvement in the system and overall dimension.
          </p>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="mt-4 font-italic">นโยบายด้านการดำเนินธุรกิจ และการปฏิบัติงาน</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>บริษัทขอสงวนสิทธิ์ที่จะเปลี่ยนแปลงข้อตกลงและเงื่อนไขการใช้บริการโดยไม่จำเป็นต้องแจ้งให้ผู้ใช้ได้ทราบล่วงหน้า</li>
            <li>
              บริษัทขอสงวนสิทธิ์การแบน หรือจำกัดการเข้าถึงบริการของผู้ใช้บริการผู้ใดก็ตาม ที่ไม่ปฏิบัติตามกฏข้อบังคับ หรือละเมิดข้อตกลงที่ทางผู้ให้บริการได้กำหนดไว้
              โดยไม่จำเป็นต้องแจ้งเหตุผลและระยะเวลาการจำกัดการอนุญาตการเข้าถึงให้กับผู้ใช้บริการได้รับทราบล่วงหน้า
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="mt-4 font-italic">Business policy and operation</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>The company reserves the right to change the terms and conditions of the service without needing to notify users in advance.</li>
            <li>
              The company reserves the right to ban or restrict access to services of any user
              that do not comply with the regulations or violate the agreement that the service
              provider has set without needing to inform the reason and the time limit of accessing restriction to the user in advance
            </li>
          </ul>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="mt-4 font-italic">ข้อตกลงการซื้อบริการ จากผู้ใช้บริการ</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>
              ผู้ใช้บริการ จำเป็นต้องทำการซื้อหรือแลกเปลี่ยนอันใดก็ตามอันจะนำมาซึ่งการมอบสิทธ์การเข้าถึงบริการของทางบริษัท
              ตามแต่ที่ผู้ใช้บริการและบริษัทจะทำการตกลงและยอมรับซึ่งกันและกัน ทางบริษัทขอสงวนสิทธิ์ในการกำหนดและเปลี่ยนแปลงข้อตกลงทางธุรกิจ
              การซื้อขาย และการแลกเปลี่ยนโดยไม่จำเป็นต้องแจ้งให้ผู้ใช้บริการได้ทราบล่วงหน้า
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="mt-4 font-italic">Service purchase agreement</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>
              Users need to purchase or exchange to reserves the right to access to the services providing by
              the company as a user and the company both agree and accept. The company reserves the right to
              determine and change the business deal, trading and exchanging without having to notify the user
              in advance.
            </li>
          </ul>
        </div>
        <div v-if="lang === 'TH'">
          <h5
            class="mt-4 font-italic"
          >ข้อตกลงเกี่ยวกับการใช้บริการ ข้อตกลงทางด้านความประพฤติของเจ้าของบัญชีและผู้ใช้</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อนหรือนำข้อมูลอันเป็นเท็จซึ่งมีผลกระทบกับการทำงานระบบโดยรวมของผลิตภัณฑ์ Mover</li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ ที่มีความผิดทาง หรือละเมิดกฏหมายทั้งทางแพ่งและอาญา เข้าสู่ระบบการทำงานของผลิตภัณฑ์</li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ ที่เกี่ยวข้องหรือสื่อไปในทางลามกอนาจารทุกรูปแบบ ทั้งชุดภาพ วีดีโอ และข้อความ</li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ อันเป็นการหมิ่นซึ่งตัวบุคคล, หมิ่นสถาบันระมหากษัตริย์</li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ ที่มีจุดประสงค์ไปในทางยุยงปลุกปั่นหรือเจตนาให้เกิดการทะเลาะวิวาท</li>
            <li>
              ผู้ใช้บริการรับทราบว่า การกระทำผิดและละเมิดกฎหมายของทางผู้ใช้บริการนั้น ทางบริษัทไม่มีส่วนเกี่ยวข้องกับการกระทำนั้น ๆ ไม่ว่าด้วยเหตุใดก็ตาม
              ผู้ใช้จะต้องรับผิดชอบแต่เพียงผู้เดียว และจะต้องรับผิดชอบต่อความเสียหายอันเกิดกับบริษัทและผลิตภัณฑ์ของบริษัท
            </li>
          </ul>
        </div>
        <div v-else>
          <h5
            class="mt-4 font-italic"
          >Terms of service and agreements on account owners and users’ demeanor</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>Users agree not to enter or bring false information into the system which affects the overall system operation of Mover’s product.</li>
            <li>Users agree not to enter or bring illegal information which violates both civil and criminal laws into the product’s system.</li>
            <li>Users agree not to enter or bring any information including sets of photos, videos, or messages which related or conveyed in an obscene way.</li>
            <li>Users agree not to enter or bring any information which humiliating person or insulting the monarchy.</li>
            <li>Users agree not to enter or bring any information which humiliating person or insulting the monarchy.</li>
            <li>
              Users acknowledged that the company has no connection with the offense and violation of the law done by the user. For whatever reason,
              users must be solely responsible and will be responsible for the damaged on the company and the products.
            </li>
          </ul>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="mt-4 font-italic">ข้อตกลงเกี่ยวกับสิทธิ์การเข้าถึงของข้อมูลผู้ใช้บริการ</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>
              ผู้ใช้บริการยินยอมมอบสิทธิ์การเข้าถึงข้อมูลรูปแบบใด ๆ ก็ตามของผู้ใช้บริษัทสามารถเข้าถึงข้อมูลบัญชี และรูปภาพ วีดีโอ ข้อความ
              การระบุและติดตามตำแหน่งที่อยู่ หรือข้อมูลรูปแบบใด ๆ ก็ตามที่ผู้ใช้ได้ทำการป้อนหรือนำเข้ามาภายในแพลตฟอร์มโดยทั้งตั้งใจและไม่ได้ตั้งใจ
              รวมทั้งการนำเข้าข้อมูลแบบทางตรงและทางอ้อมอันเกิดจากการกระทำของผู้ใช้บริการเอง
            </li>
            <li>
              การเข้าถึงข้อมูลในแพลตฟอร์มที่เกี่ยวข้องกับการให้บริการของบริษัท ผู้ใช้บริการยินยอมมอบสิทธิ์การเข้าถึงข้อมูลในรูปแบบใด ๆ ก็ตามของผู้ใช้
              ที่ได้ทำการป้อนหรือนำเข้ามาในแพลตฟอร์มที่เกี่ยวข้องหรือบริการที่เกี่ยวข้องหรือผลิตภัณฑ์ข้างเคียงที่ได้ทำการเชื่อมต่อเพื่อแชร์หรือโอนถ่ายข้อมูลและทำกิจกรรมต่างๆร่วมกัน
            </li>
            <li>
              บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อตกลงเกี่ยวกับสิทธิ์การเข้าถึงของข้อมูลผู้ใช้บริการโดยไม่จำเป็นต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า
              และจะถือว่าผู้ใช้บริการได้รับทราบและยินยอมตามข้อตกลงเมื่อใช้บริการ
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="mt-4 font-italic">Agreement on users’ data accessing rights</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>
              Users grant the company to access any form of data. The company able to access account information,
              pictures, videos, messages, identifying and tracking locations, or any information that the user
              has entered or imported into the platform, both intentionally and unintentionally including, directly
              and indirectly data importation which done by the user.
            </li>
            <li>
              Users grant the company to access any form of data that users have been entered or imported into relevant platforms,
              related services, or side products which have been connected to share or transfer data and to do various actions together.
            </li>
            <li>
              The company reserves the right to change the agreement on users’ data accessing rights of the service without needing to
              notify users in advance and considering that the user has been informed and agreed to the agreement when registered to the service.
            </li>
          </ul>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="mt-4 font-italic">นโยบายด้านการใช้งานข้อมูลของผู้ใช้บริการ</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>บริษัทจะไม่เปิดเผยข้อมูลส่วนตัวของผู้ใช้บริการสู่พื้นที่สาธารณะ ทั้งในรูปแบบแพลตฟอร์มออนไลน์และออฟไลน์โดยมิได้รับการอนุณาตจากผู้ใช้บริการก่อน</li>
            <li>บริษัทจะไม่เปิดเผยหรืออนุญาติให้บริษัทหรือบริการในแพลตฟอร์มที่ไม่มีส่วนเกี่ยวข้องกับผลประโยชน์และประสิทธิภาพการให้บริการเข้ามาเชื่อมต่อ หรือโอนถ่ายข้อมูล</li>
            <li>
              การเก็บและใช้งานข้อมูลต่างๆของผู้บริโภค มีจุดประสงค์เพื่อนำไปพัฒนาคุณภาพของผลิตภัณฑ์เพื่อนำเสนอและมอบคุณค่า
              เพื่อเพิ่มคุณภาพประสบการณ์ของผู้ใช้บริการให้ดียิ่งขึ้น
            </li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ อันเป็นการหมิ่นซึ่งตัวบุคคล, หมิ่นสถาบันระมหากษัตริย์</li>
            <li>ผู้ใช้บริการยินยอมที่จะไม่ป้อน หรือนำข้อมูลในรูปแบบใด ๆ ที่มีจุดประสงค์ไปในทางยุยงปลุกปั่นหรือเจตนาให้เกิดการทะเลาะวิวาท</li>
            <li>
              ผู้ใช้บริการรับทราบว่า การกระทำผิดและละเมิดกฎหมายของทางผู้ใช้บริการนั้น ทางบริษัทไม่มีส่วนเกี่ยวข้องกับการกระทำนั้น ๆ ไม่ว่าด้วยเหตุใดก็ตาม
              ผู้ใช้จะต้องรับผิดชอบแต่เพียงผู้เดียว และจะต้องรับผิดชอบต่อความเสียหายอันเกิดกับบริษัทและผลิตภัณฑ์ของบริษัท
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="mt-4 font-italic">Policy on the usage of users’ information</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>The company will not disclose any information of the user to the public on both online and offline platforms without prior approval from the user.</li>
            <li>The company will not disclose users’ information or allow other companies, services, or platforms that are irrelevant to access or transfer users’ data.</li>
            <li>
              The purpose of collecting and using users’ information is to improve the quality of the product and to enhance the quality of the user experience.
            </li>
            <li>Users agree not to enter or bring any information which humiliating person or insulting the monarchy.</li>
            <li>Users agree not to enter or bring any information with the purpose of instigating incitement or intention to cause controversy.</li>
            <li>
              Users acknowledged that the company has no connection with the offense and violation of the law done by the user. For whatever reason,
              users must be solely responsible and will be responsible for the damaged on the company and the products.
            </li>
          </ul>
        </div>
        <div v-if="lang === 'TH'">
          <h5 class="mt-4 font-italic">ข้อตกลงเกี่ยวกับสิทธิ์การใช้งานข้อมูล</h5>
          <ul class="pl-3 pr-3 pl-sm-5 pr-sm-5">
            <li>
              ผู้ใช้บริการยินยอมให้บริษัทใช้งานข้อมูลบัญชี และรูปภาพ วีดีโอ ข้อความ การระบุและติดตามตำแหน่งที่อยู่
              หรือข้อมูลรูปแบบใด ๆ ก็ตามที่ผู้ใช้ได้ทำการป้อนหรือนำเข้ามาภายในแพลตฟอร์มโดยทั้งตั้งใจและไม่ได้ตั้งใจ
              ทั้งทางตรงและทางอ้อมอันเกิดจากการกระทำของผู้ใช้บริการเอง เพื่อวิเคราะห์และพัฒนาคุณภาพการบริการของผลิตภัณฑ์
            </li>
            <li>
              ผู้ใช้บริการยินยอมให้บริษัทนำข้อมูลใด ๆ ของผู้ใช้บริการไปจัดเรียง วิเคราะห์ และทำการโอนถ่ายหรือแชร์ไปยังระบบการทำงานที่เกี่ยวข้อง
              เพื่อทำการพัฒนาผลิตภัณฑ์และบริการของบริษัท
            </li>
            <li>
              ผู้ใช้บริการที่ได้ป้อนหรือนำเข้าข้อมูลในรูปแบบใด ๆ ก็ตามเข้ามาในระบบการบริการของทางบริษัท ผู้ใช้บริการนั้นยินยอมให้สิทธิ์บริษัท
              เก็บ โอนถ่าย ทำสำเนา จัดเรียง วิเคราะห์ เปลี่ยนแปลง ลบข้อมูล ตามแต่นโยบายของผู้ให้บริการจะกำหนด
            </li>
            <li>
              ผู้ใช้บริการยินยอมให้สิทธิ์บริษัทเผยแพร่หรือโอนถ่ายข้อมูลของผู้ใช้บริการที่เกี่ยวข้องกับการทำงานของผลิตภัณฑ์
              ไปสู่ระบบการทำงานของผลิตภัณฑ์ที่เกี่ยวข้อง
            </li>
            <li>
              บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อตกลงเกี่ยวกับสิทธิ์การใช้งานข้อมูลโดยไม่จำเป็นต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า
              และจะถือว่าผู้ใช้บริการได้รับทราบและยินยอมตามข้อตกลงเมื่อใช้บริการ
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="mt-4 font-italic">Agreement on data usage rights</h5>
          <ul class="pl-2 pr-2 pl-sm-5 pr-sm-5">
            <li>
              Users agree to allow the company to use account information, images, video, messages,
              location-identifying/tracking, or any form of information that the user has entered or
              imported into the platform, both intentionally and unintentionally, directly and indirectly,
              to analyze and to improve the quality of the product.
            </li>
            <li>
              Users agree to allow the company to arrange and analyze any information of the user and
              allow the company to transfer or share information to relevant systems, to develop the products
              and services of the company.
            </li>
            <li>
              Users who have entered or imported any form of information into the service
              system of the company agrees to grant the company the right to transfer, copy,
              arrange, analyze, change, and delete data depending on the policy of the service provider.
            </li>
            <li>
              Users agree to grant the company the right to publish or transfer users' information related
              to the system of the product to the system of related products.
            </li>
            <li>
              The company reserves the right to change the agreement on data usage rights of the service
              without needing to notify users in advance and considering that the user has been informed and
              agreed to the agreement when registered to the service.
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center flex-column">
          <div class="custom-control custom-checkbox mt-3">
            <input id="terms" type="checkbox" class="custom-control-input" v-model="isAccept" />
            <label
              v-if="lang === 'TH'"
              style="font-size:12pt;"
              class="thai custom-control-label"
              for="terms"
            >ฉันยอมรับข้อตกลงการใช้งาน</label>
            <label
              v-else
              style="font-size:12pt;"
              class="thai custom-control-label"
              for="terms"
            >I accept the terms and conditions.</label>
          </div>
          <div class="btn-regis">
            <button
              type="button"
              id="registerBtn"
              class="btn thai"
              :class="{ 'disabled': !isAccept }"
              @click="register"
              :disabled="!isAccept"
            >
              <span v-if="lang === 'TH'">สมัครสมาชิก</span>
              <span v-else>Sign up</span>
            </button>
            <button type="button" id="back" class="btn thai" @click="cancel">
              <span v-if="lang === 'TH'">ยกเลิก</span>
              <span v-else>cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '../components/Home/Navbar-Terms'
export default {
  components: {
    // Navbar
  },
  data () {
    return {
      isAccept: false,
      lang: 'EN'
    }
  },
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    register () {
      this.$router.replace({ name: 'register', params: this.$route.params })
    }
  }
}
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  width: 100%;
}
.lang-control {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 10px 0 10px 0;
}
.custom-select {
  font-size: 10pt;
  width: 6rem;
}
#logo {
  width: 50px;
}
.btn {
  margin: 10px 0 0 0;
  color: white;
  border-radius: 18px !important;
  background: linear-gradient(
    180deg,
    rgba(33, 149, 186, 1) 0%,
    rgba(27, 127, 158, 1) 100%
  ) !important;
}
#registerBtn {
  width: 100%;
}
.btn-regis {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem auto 1rem auto;
}
.input-group {
  align-self: flex-end;
}
</style>
