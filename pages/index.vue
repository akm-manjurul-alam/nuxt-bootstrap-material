<template>
  <div class="section">
    <div class="row">
      <div class="col-md-8 text-center">
        <h2 class="h2">Composants</h2>
      </div>
      <div class="col-md-12">
        <h3>Tabs</h3>
      </div>
      <div class="col-md-12">
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
      </div>
    </div>
  </div>
</template>
