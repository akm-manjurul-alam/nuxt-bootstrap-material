const purgeCss = require('purgecss-webpack-plugin');
const purgeCssWhiteLister = require('purgecss-whitelister');
const glob = require('glob-all');
const fs = require('fs-extra');
const path = require('path');

const config = require('./config');

const baseUrl = config.get('baseUrl');
const themeColor = config.get('themeColor');
const title = config.get('title');
const description = config.get('description');
const image = config.get('image');
const manifest = config.get('manifest');

const bPath = path.join(__dirname, '/vendors/bootstrap-vue');

// copy bootstrap in vendors for include individual components
fs.copySync(
  path.join(__dirname, '/node_modules/bootstrap-vue/es'), 
  bPath
)

let link = [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel: 'image_src', href: baseUrl + image },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons' },
]

if (manifest) {
  link.push({ rel: 'manifest', href: manifest });
}

const codemirrorCss = [
  './node_modules/codemirror/lib/codemirror.css',
  './node_modules/codemirror/theme/monokai.css',
];

module.exports = {
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=5' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'og:image', property: 'og:image', content: baseUrl + (config.get('og:image') || image) },
      { hid: 'og:title', property: 'og:title', content: config.get('og:title') || title },
      { hid: 'og:description', property: 'og:description', content: config.get('og:description') || description },
      { name: 'theme-color', content: themeColor },
      { name: 'apple-mobile-web-app-status-bar-style', content: config.get('apple:color') || themeColor },
      { name: 'apple-mobile-web-app-title', content: config.get('apple:title') || title },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: link,
  },
  loading: false,
  env: {
    baseUrl: baseUrl,
    components: require('./components')
  },
  css: codemirrorCss.concat([
    '~assets/scss/material-kit.scss',
  ]),
  plugins: [
    '~plugins/head',
    '~plugins/bootstrap',
    { src: '~plugins/codemirror', ssr: false },
  ],
  build: {
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      config.resolve.alias.vue = 'vue/dist/vue.js'
      if (!isDev) {

        const whitelist = purgeCssWhiteLister(codemirrorCss);

        config.plugins.push(
          new purgeCss({
            paths: glob.sync([
              path.join(__dirname, '**/*.vue'),
              path.join(bPath, '**/*.js')
            ]),
            whitelist: whitelist.concat(['html', 'body', '.nav-open', '#bodyClick'])
          })
        )
      } else if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
};
