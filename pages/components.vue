<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-md-12">
          <h1 class="h2">Tabs</h1>
          <a href="https://bootstrap-vue.js.org/docs/components/tabs" target="_blank" rel="noopener">Bootstrap Vue Docs</a>
        </div>
        <div class="col-md-12">
          <app-component :component="cardTabs"></app-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppComponent from '~/components/component'

const components = process.env.components;

export default {
  components: {
    AppComponent,
  },
  data() {
    return components
  }
}
</script>
