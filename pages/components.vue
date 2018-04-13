<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-md-8 text-center">
          <h1 class="h2">Components</h1>
        </div>
        <div class="col-md-12">
          <h2 class="h3">Tabs</h2>
        </div>
        <div class="col-md-12">
          <app-nav-tabs/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTabs from '~/components/tabs'
export default {
  components: {
    AppTabs
  },
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
