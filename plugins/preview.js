import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
import VueLivePreview from 'vue-live-preview'

import 'codemirror/mode/vue/vue'

Vue.use(VueLivePreview, {
  theme: 'material'
})