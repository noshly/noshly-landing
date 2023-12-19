import { apiEndpoint } from './sm.json'

const title = ''
const desc = ''

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true
  },

  loading: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      { property: 'og:title', content: title },
      { property: 'twitter:title', content: title },

      { property: 'description', content: desc },
      { property: 'og:description', content: desc },
      { property: 'twitter:description', content: desc },

      { property: 'og:url', content: "" },
      { property: 'og:locale', content: 'en_gb' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/share.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/css/globals.scss', lang: 'scss' }
  ],

  env: {
    dev: process.env.NODE_ENV !== 'production',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/inject.js' },
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~/plugins/resize.js', mode: 'client' },
    { src: '~/plugins/scroll.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  prismic: {
    endpoint: apiEndpoint,
    modern: true
    /* see configuration for more */
  },

  styleResources: {
    scss: [
      '~assets/css/_variables.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap', 'three', 'sanitize-html', '@prismicio/vue'],
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        // exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }),
        config.module.rules.push({
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: [
            'raw-loader',
            'glslify-loader'
          ]
        }),
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        })
    },
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
  }
}
