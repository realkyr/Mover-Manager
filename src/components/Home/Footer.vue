<template>
  <div>
    <div class="container-fluid">
      <div class="footer row d-flex justify-content-around">
        <div class="col-4 offset-1">
          <img src="../../assets/logo/logo.png"/>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quaerat nostrum suscipit
            sit minus, quod eaque voluptates perferendis quia,
            delectus esse optio incidunt. Assumenda porro temporibus
            voluptate, aspernatur alias vitaes facilis?
          </p>
        </div>
        <div class="col-5 offset-1">
          <h3>
            CONTACT US
          </h3>
          <p class="address">
            32/98 Grandvile Onnut 80 Lane 5 Sukhumvit 77 Rd.,<br/> Prawet BKK. 10250
          </p>
          <p class="tel">
            TEL: +66 945587588 <br />
            E-MAIL: yora46@gmail.com
          </p>
          <div class="social row ml-1">
            <a href="https://www.facebook.com/moversafety/"><i class="fab fa-facebook-f"></i></a>
            <a><i class="fab fa-twitter"></i></a>
            <a><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="footer-tag container-fluid d-flex align-items-center">
      <!-- <vs-col class="copyright" vs-offset="1" vs-w="12"> -->
      <div class="copyright col offset-1">
        Copyright © 2019 Mover. All Rights Reserved
      <!-- </vs-col> -->
      </div>
    <!-- </vs-row> -->
    </div>
  </div>
</template>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);

.footer {
  padding: 3em 0em;
}

img {
  height: 74px;
  max-width: 82px;
}

p {
  color: #707070;
  margin-top: 20px;
  font-size: 0.8em;
}

.footer-tag {
  border-top-style: solid;
  border-top-color: #EBEBEB;
  border-top-width: 1px;
  height: 80px;
  color: #C6C6C6;
  padding: 16px 0 16px 0;
  width: 100%
}

.copyright {
  font-size: 0.7em;
}

a {
  color: #2c3e50;
}

h3 {
  font-weight: 400;
  font-size: 1.5em;
}

.social {
  margin-top: 20px;
}
.social i {
  margin-right: 20px;
}

.tel {
  font-size: 10px;
}
</style>
