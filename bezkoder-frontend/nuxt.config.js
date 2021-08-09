import axios from "axios";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bezkoder-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', type:'text/css', href:'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // devModules: ['@nuxtjs/eslint-module'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  env:{
    baseUrl:'http://localhost:8080/api/tutorials'
  },
  server:{
    host:"0.0.0.0",
    port:3000
  },
  axios: {
    baseURL: 'http://localhost:8080/api/tutorials',
  },
  
}
