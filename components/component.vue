<template>
  <div>
    <h2 class="h3">
      {{ component.name }}
      <button v-on:click="showCode = !showCode" type="button" class="btn btn-success btn-sm">
        <i class="material-icons">code</i>
      </button>
      <button v-on:click="refresh" type="button" class="btn btn-success btn-sm">
        <i class="material-icons">refresh</i>
      </button>
    </h2>
    <div id="component">
      <slot></slot>
    </div>
    <div v-if="showCode">
      <codemirror v-model="component.code" @input="onChange"></codemirror>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  let cheerio;

  if (process.browser) {
    cheerio = require('cheerio')
  }

  export default {
    data() {
      return {
        style: null,
        cheerio: cheerio,
        showCode: false,
      }
    },
    props: {
      component: {
        name: {
          type: String,
          default: null
        },
        code: {
          type: String,
          default: null
        },
      }
    },
    methods: {
      refresh() {
        this.set(this.code);
        this.component.code = this.code;
      },
      onChange(code) {
        this.set(code)
      },
      set(code) {

        const content = this.cheerio.load(code);
        const html = content('template').html() || '';

        new Vue({
          el: '#component',
          template: `<div id="component">${html.replace(/=""/g, '')}</div>`,
        })

        if (!this.style) {
          const head = document.head || document.getElementsByTagName('head')[0];
          this.style = document.createElement('style');
          this.style.type = 'text/css';
          head.appendChild(this.style);
        }

        this.style.innerHTML = content('style').html();
      }
    },
    mounted() {
      this.code = this.component.code;
    }
  }
</script>

<style scoped>
  .btn {
    margin-left: 10px;
  }
</style>