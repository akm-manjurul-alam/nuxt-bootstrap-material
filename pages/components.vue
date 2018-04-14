<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-md-12">
          <h1 class="h2">Tabs</h1>
          <a href="https://bootstrap-vue.js.org/docs/components/tabs" target="_blank" rel="noopener">Bootstrap Vue Docs</a>
        </div>
        <div class="col-md-12">
          <app-component :component="components.cardTabs">
            <app-card-tabs></app-card-tabs>
          </app-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppComponent from '~/components/component'
import AppCardTabs from '~/components/bootstrap/cardTabs'

const components = process.env.components;

export default {
  components: {
    AppComponent,
    AppCardTabs
  },
  data() {
    return {
      components: components,
    }
  }
}
</script>


<style lang="scss">

  $linear-gradient: 135deg,rgba(3, 169, 244, 0.9),rgba(33, 150, 243, 0.45);

  .page-header {
    background-image: url('/bg.jpg');
  }

  .page-header p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-top: 40px;
  }

  .page-header:after {
    background: rgba(33, 150, 243, 0.6);
    background: linear-gradient($linear-gradient);
    background: -moz-linear-gradient($linear-gradient);
    background: -webkit-linear-gradient($linear-gradient);
  }
</style>
