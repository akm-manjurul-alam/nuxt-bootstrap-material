<template>
  <div>
    <h2 class="h3">
      {{ component.name }}
      <button v-on:click="showCode = !showCode" type="button" class="btn btn-primary btn-sm">
        <i class="material-icons">code</i>
      </button>
      <button v-on:click="init" type="button" class="btn btn-warning btn-sm">
        <i class="material-icons">refresh</i>
      </button>
    </h2>
    <div v-if="showCode">
      <codemirror v-model="component.code" @input="onChange"></codemirror>
      <hr>
    </div>
    <div id="component"></div>
  </div>
</template>

<script>

  import Vue from 'vue'

  let cheerio, babel

  if (process.browser) {
    cheerio = require('cheerio')
    babel = require('babel-standalone')
  }

  export default {
    data() {
      return {
        cheerio: cheerio,
        babel: babel,
        showCode: false,
        elStyle: null,
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
      init() {
        this.set(this.code)
        this.component.code = this.code
      },
      onChange(code) {
        this.set(code)
      },
      set(code) {

        const content = this.cheerio.load(code)

        const template = content('template').html() || ''
        const script = content('script').html()
        const style = content('style').html()

        let data = {}

        if (typeof script === 'string') {
          try {
            let js = babel.transform(script, { presets: ['es2015'] }).code
            const exports = {}
            data = eval(js)
          } catch(e) {}
        }

        if (template !== this.template || script !== this.script) {

          this.template = template
          this.script = script

          new Vue({
            el: '#component',
            template: `<div id="component"><div id="content"></div></div>`,
          })

          new Vue(Object.assign({
            el: '#content',
            template: template.replace(/=""/g, ''),
          }, data))
        }

        if (!this.elStyle) {
          const head = document.head || document.getElementsByTagName('head')[0]
          this.elStyle = document.createElement('style')
          this.elStyle.type = 'text/css'
          head.appendChild(this.elStyle)
        }
        
        this.elStyle.innerHTML = style
      }
    },
    mounted() {
      this.code = this.component.code
      this.init()
    }
  }
</script>

<style scoped>
  .btn {
    margin-left: 10px;
  }
</style>