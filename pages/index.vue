<template>
  <div class="container">
    <div class="section">
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'landing',
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

  .section {
    position: relative;
    top: -40px;
    padding: 40px 0 0;
    margin: 0;
  }
</style>
