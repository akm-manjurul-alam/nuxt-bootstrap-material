<template>
  <b-card no-body class="card-nav-tabs">
    <b-tabs card>
      <b-tab active>
        <template slot="title">
          <i class="material-icons">face</i> Profile
          <span class="ripple-container"></span>
        </template>
        Profile Contents
      </b-tab>
      <b-tab>
        <template slot="title">
          <i class="material-icons">chat</i> Messages
          <span class="ripple-container"></span>
        </template>
        Messages Contents
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<style>
  .card-header {
    background: linear-gradient(60deg, #4CAF50, #8BC34A);
  }
</style>