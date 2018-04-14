import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

import 'codemirror/mode/vue/vue'

Vue.use(VueCodemirror, {
  options: { 
    theme: 'monokai',
    tabSize: 2,
    lineNumbers: true,
    mode: 'text/x-vue',
  },
})