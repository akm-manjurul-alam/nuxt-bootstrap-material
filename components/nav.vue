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
          <strong>NBM</strong> Kit
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
            <a class="nav-link" href="/tools">
              Tools
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/mons54/nuxt-bootstrap-material-kit">
              GitHub
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