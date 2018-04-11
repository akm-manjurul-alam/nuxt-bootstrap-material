import axios from 'axios'

export default ({}, inject) => {
  
  const api = axios.create({
    baseURL: process.env.apiBaseUrl
  });


  inject('api', api)
}

class Api {

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.apiBaseUrl
    });
  }

  login() {
    return this.axios.get('/login');
  }
}