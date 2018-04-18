<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col-md-12">
          <h1 class="h2">Tools</h1>
        </div>
        <div class="col-md-12">
          <h2 class="h3">Editor</h2>
          <no-ssr>
            <live-preview :code="code" />
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  const code = process.env.components.example.code;

  export default {
    data() {
      return {
        code: code
      }
    }
  }
</script>
