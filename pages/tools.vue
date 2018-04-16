<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-md-12">
          <h1 class="h2">Tools</h1>
        </div>
        <div class="col-md-12">
          <h2 class="h3">Editor</h2>
          <app-editor :code="code" :show-code="true"></app-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppEditor from '~/components/editor'

const code = process.env.components.example.code;

export default {
  components: {
    AppEditor,
  },
  data() {
    return {
      code: code
    }
  }
}
</script>
