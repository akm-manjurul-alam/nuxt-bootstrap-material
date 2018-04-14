<template>
<div>
  <nav class="navbar navbar-expand-lg"
       v-bind:class="{
        'fixed-top': fixed == 'top', 
        'fixed-bottom': fixed == 'bottom', 
        'navbar-transparent': transparent
      }" id="navBar">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="/">
          <strong>Solutions</strong> Web
        </a>
        <button v-on:click="toogle" class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/components">
              Components
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 3
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 4
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link--text-mobile" href="#">
              <i class="material-icons">email</i> 
              <span class="nav-text">Contact</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link--text-mobile" href="#">
              <i class="material-icons">place</i> 
              <span class="nav-text">Adresse</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link--text-mobile" href="https://www.facebook.com/solutionsweb.pro/" target="_blank" rel="noopener">
              <svg class="material-icons svg-icons" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"/>
              </svg>
              <span class="nav-text">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div v-on:click="close" id="bodyClick"></div>
</div>
</template>

<script>

const transparent = true;
const fixed = 'top';

function toggle(value) {
  if (value) {
    document.body.classList.add('nav-open');
  } else {
    document.body.classList.remove('nav-open');
  }
}

export default {
  methods: {
    toogle: () => {
      this.navOpen = !this.navOpen;
      toggle(this.navOpen);
    },
    close: () => {
      this.navOpen = false;
      toggle(this.navOpen);
    },
  },
  data() {
    return {
      navOpen: false,
    }
  },
  props: {
    transparent: {
      type: Boolean,
      default: transparent
    },
    fixed: {
      type: String,
      default: 'top'
    }
  },
  mounted() {
    if (this.transparent) {
      window.addEventListener('scroll', function(e) {
        if ((window.pageYOffset || document.documentElement.scrollTop) > 20) {
          document.getElementById('navBar').classList.remove('navbar-transparent');
        } else {
          document.getElementById('navBar').classList.add('navbar-transparent');
        }
      });
    }
  }
}

</script>

<style>

#bodyClick {
  display: none;
}

.nav-open #bodyClick {
  display: block;
}

.navbar {
  color: rgb(85, 85, 85);
  background-color: #fff;
}

.navbar.fixed-bottom {
  margin-bottom: 0;
  margin-top: 20px;
}

</style>