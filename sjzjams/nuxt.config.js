
// const bodyParser = require("bodyParser");
// const session = require("express-session");
module.exports = {
  /*
  ** Headers of the page 配置页面
  */
  head: {
    title: '峰向标',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'fxb ui' }
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
  },

   /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
//  serverMiddleware: [
//   // body-parser middleware
//   bodyParser.json(),
//   // session middleware
//   session({
//     secret: 'super-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 }
//   }),
//   // Api middleware
//   // We add /api/login & /api/logout routes
//   '~/api'
// ],
  /*
  **配置全局css
  */
 css: [ '~assets/css/main.css','iview/dist/styles/iview.css'],
 babel:{
   "plugins": [["import", [
     {
       "libraryName": "iview",
       "styleLibraryName": "src/components",
       "style": true
     }
   ]]],
   comments: true
 },
 plugins: [
   '@/plugins/iview'
 ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   extractCSS: { allChunks: true },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
