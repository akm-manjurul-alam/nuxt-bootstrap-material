<template>
  <form class="contact-form" novalidate>
    <div class="alert alert-success d-none">
      <div class="container">
        <div class="alert-icon">
          <i class="material-icons">check</i>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">clear</i></span>
        </button>
        <strong>Votre message a été envoyé.</strong>
      </div>
    </div>
    <div class="alert alert-danger d-none">
      <div class="container">
        <div class="alert-icon">
          <i class="material-icons">error_outline</i>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">clear</i></span>
        </button>
        <strong>Une erreur est survenue.</strong>
        </div>
    </div>
    <input type="hidden" name="token">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group bmd-form-group">
          <label for="contactName" class="bmd-label-floating">Nom*</label>
          <input id="contactName" name="name" type="text" maxlength="30" class="form-control" required>
          <div class="form-control-feedback">Minimum 3 caractères</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group bmd-form-group">
          <label for="contactEmail" class="bmd-label-floating">Email*</label>
          <input id="contactEmail" name="email" type="email" class="form-control" autocomplete="off" required>
          <div class="form-control-feedback">Email invalide</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group bmd-form-group">
          <label for="contactPhone" class="bmd-label-floating">Téléphone</label>
          <input id="contactPhone" name="phone" type="tel" class="form-control" autocomplete="off">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group bmd-form-group">
          <label for="contactAddress" class="bmd-label-floating">Adresse</label>
          <input id="contactAddress" name="address" type="text" class="form-control" autocomplete="off">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group bmd-form-group">
          <label for="contactMessage" class="bmd-label-floating">Message*</label>
          <textarea id="contactMessage" name="message" class="form-control" rows="4" autocomplete="off" required></textarea>
          <div class="form-control-feedback">Minimum 10 caractères</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 ml-auto mr-auto text-center">
        <button type="submit" class="btn btn-primary btn-raised">Envoyer</button>
      </div>
    </div>
  </form>
</template>