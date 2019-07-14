<template>
  <div class="container-fluid">
    <div class="navbar row d-flex justify-content-around align-items-center">
      <div class="d-flex justify-content-center col-2">
        <router-link to="/">
          <img src="../../assets/logo/logo.png">
        </router-link>
      </div>
      <div class="nav-items d-flex justify-content-end col-1 col-md-8">
        <ul :class="toggle">
          <li class="logIn">
            <button @click="login">Login</button>
          </li>
          <li class="join">
            <button @click="register">Join</button>
          </li>
        </ul>
      </div>
      <div id="holder" class="col-1">
        <button @click="burger" class="burgerbutton" id="burger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: {
        collapse: true
      }
    }
  },
  mounted () {
    this.toggleNav()
    this.$nextTick(() => {
      window.addEventListener('resize', this.toggleNav)
    })
  },
  methods: {
    login () {
      // this should route to log in page
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    burger () {
      if (document.querySelector('.nav-items > ul').className !== 'collapse') {
        document.querySelector('#burger').className = 'burgerbutton'
        this.toggle.collapse = true
      } else {
        document.querySelector('#burger').className = 'burgerbutton is-active'
        this.toggle.collapse = false
      }
    },
    toggleNav () {
      if (screen.width > 1024) this.toggle.collapse = false
      else this.toggle.collapse = true

      if (screen.height < 500) this.toggle.collapse = true
    }
  }
}
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.7.2/css/all.css);

img {
  display: inline-block;
  height: 74px;
  max-width: 82px;
}

.navbar {
  padding: 50px 0 10px 0;
  width: 100%;
  z-index: 99;
}

ul {
  list-style-type: none;
  margin-bottom: 0px;
}

@media screen and (max-width: 1440px) {
  ul {
    list-style-type: none;
    padding: 0;
  }
}

li {
  display: inline-block;
  margin-left: 20px;
}

li:first-child button {
  color: #000;
}

.logIn {
  margin-top: 6px;
  margin-right: 0px;
  margin-left: 30px;
  color: #000;
  border-right: 1px solid #e6e6e6;
  padding: 4px 20px 2px 0px;
}

.join button {
  background: linear-gradient(180deg, rgba(33,149,186,1) 0%, rgba(27,127,158,1) 100%);
  padding: 5px 30px 5px 30px;
  border-radius: 20px;
  color: #fff;
}

button {
  font-size: 1em;
  color: #c6c6c6;
  border: none;
  outline: 0;
  text-decoration: none;
  background: none;
  transition: 0.3s;
  overflow: hidden;
}

.logIn button {
  color: #000;
}

.join button {
  color: #fff;
}

li button:hover {
  color: #000;
}

li button:hover:after {
  transform: scaleX(1);
}

button:focus {
  outline: 0;
}

button:after {
  position: relative;
  background: #1f95ba;
  width: 100%;
  left: 0px;
  height: 2px;
  display: block;
  border-radius: 1px;
  content: "";
  transform: scaleX(0);
  transition: all 0.2s ease;
}

.burgerbutton {
  display: none;
}

#holder {
  display: none;
}

@media screen and (max-width: 1024px), screen and (max-height: 500px) {
  .nav-items {
    display: block !important;
    flex: 0;
  }

  li.logIn {
    padding: 0;
  }

  #holder {
    display: block;
  }

  .nav-items li {
    display: block;
    margin: 0;
    margin-top: 10px;
  }

  .collapse {
    opacity: 0;
  }

  .nav-items ul {
    position: absolute;
    padding: 0;
    margin-top: 2.77777px;
    -webkit-transform: translateX(-53%);
    transform: translateX(-53%);
    background: white;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

  .join button {
    width: 120px;
    padding: 10px 40px 10px 40px;
    border-radius: 20px;
    color: #fff;
  }

  #burger {
    font-size: 1em;
    color: #c6c6c6;
    border: none;
    outline: 0;
    text-decoration: none;
    background: none;
    transition: 0.3s;
    overflow: hidden;
    width: 60px;
  }

  button:after {
    width: 100vw;
  }

  .burgerbutton {
    display: block;
    cursor: pointer;
  }

  .line{
    width: 30px;
    height: 3px;
    background-color: #329cc5;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  /* ONE */

  #burger.is-active .line:nth-child(2){
    opacity: 0;
  }

  #burger.is-active .line:nth-child(1){
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #burger.is-active .line:nth-child(3){
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-9px) rotate(-45deg);
  }

  img {
    height: 44.4px;
    max-width: 49.2px;
  }
}
</style>
