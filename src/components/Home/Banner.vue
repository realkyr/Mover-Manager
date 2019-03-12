<template>
  <div>
    <vs-row vs-w="12" vs-type="flex" vs-justify="center">
      <h1>
        <span>MOVER</span>
        School Bus Security Platform.
      </h1>
    </vs-row>
    <div class="banner">
      <img class="school" :src="picture" />
    </div>
  </div>
</template>

<script>
export default {
  created () {
    window.addEventListener('resize', this.banner)
    this.picture = require(window.innerWidth <= 425
      ? '../../assets/pics/banner_mobile.jpg'
      : '../../assets/pics/banner.jpg')
  },
  data () {
    return {
      picture: ''
    }
  },
  methods: {
    banner () {
      this.picture = require(window.innerWidth <= 425
        ? '../../assets/pics/banner_mobile.jpg'
        : '../../assets/pics/banner.jpg')
    }
  }
}
</script>

<style scoped>
span {
  font-weight: 900;
  color: #f26c25;
}

h1 {
  font-weight: 700;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  text-align: center;
}

.school {
  margin-top: 40px;
  max-width: 100vw;
}

.title {
  margin-top: 70px;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .banner {
    margin-top: 2.5em;
  }
}

@media screen and (max-width: 425px) {
  h1 {
    margin: 2.5em 0em;
  }
}

@media screen and (max-width: 375px) {
  h1 {
    font-size: 1.8em;
  }
}

@media screen and (max-width: 320px) {
  .banner {
    margin-top: 0em;
  }
}
</style>
