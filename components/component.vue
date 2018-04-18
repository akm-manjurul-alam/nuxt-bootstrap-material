<template>
<div>
  <h2 class="h3">
    {{ component.name }}
    <button v-on:click="showCode = !showCode" type="button" class="btn btn-primary btn-sm">
      <i class="material-icons">code</i>
    </button>
    <button v-on:click="refresh" type="button" class="btn btn-warning btn-sm">
      <i class="material-icons">refresh</i>
    </button>
  </h2>
  <no-ssr>
    <live-preview :code="component.code" :show-code="showCode" ref="editor"/>
  </no-ssr>
</div>
</template>

<script>
  export default {
    data() {
      return {
        showCode: false,
      }
    },
    props: {
      component: {
        name: {
          type: String,
          default: null,
        },
        code: {
          type: String,
          default: null,
          required: true,
        },
      },
    },
    methods: {
      refresh() {
        this.$refs.editor.init(this.component.code);
      },
    },
  }
</script>

<style scoped>
  .btn {
    margin-left: 10px;
  }
</style>