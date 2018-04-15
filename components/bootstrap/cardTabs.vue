<template>
<b-card no-body class="card-nav-tabs">
  <b-tabs card>
    <b-tab active>
      <span slot="title">
        <i class="material-icons">face</i> Profile
        <span class="ripple-container"></span>
      </span>
      <span>Profile Contents</span>
    </b-tab>
    <b-tab>
      <span slot="title">
        <i class="material-icons">chat</i> Messages
        <span class="ripple-container"></span>
      </span>
      <span>Messages Contents</span>
    </b-tab>
  </b-tabs>
</b-card>
</template>

<style>
.card .card-header {
  background: linear-gradient(60deg, #4CAF50, #8BC34A);
}
</style>

<name>
  Card Tabs
</name>