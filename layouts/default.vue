<template>
  <div>
    <app-nav :transparent="false" fixed="top"/>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import AppNav from '~/components/nav.vue'

  export default {
    components: {
      AppNav
    },
  }
</script>

<style>
  .section {
    position: relative;
    top: -40px;
    padding: 40px 0 0;
    margin: 0;
  }
</style>
