<template>
  <div class="Home">
    <Navbar @nav="scroll($event)"/>
    <Banner/>
    <About id="about" />
    <Vision id="vision" />
    <Mission id="mission" />
    <App id="app" />
    <Footer id="contact" />
  </div>
</template>

<script>
import Navbar from '../components/Home/Navbar.vue'
import Banner from '../components/Home/Banner.vue'
import About from '../components/Home/About.vue'
import Footer from '../components/Home/Footer.vue'
import Mission from '../components/Home/Mission.vue'
import App from '../components/Home/AppDownload.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Banner,
    About,
    Footer,
    Mission,
    App
  },
  methods: {
    scroll (el) {
      console.log(el)
      const VueScrollTo = require('vue-scrollto')

      VueScrollTo.scrollTo(document.querySelector('#' + el), 800)
    }
  }
}
</script>
