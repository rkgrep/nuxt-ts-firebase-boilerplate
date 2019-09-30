import { Configuration } from '@nuxt/types'
import * as env from './lib/env'
import { mapValues } from 'lodash'

const config: Configuration = {
  mode: 'spa',
  env: mapValues(env, v => String(v)),
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
    '~/plugins/vuefire.ts',
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    },
  },
}

export default config
