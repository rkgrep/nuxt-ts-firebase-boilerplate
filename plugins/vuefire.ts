import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import { auth, db } from '../lib/firebase'

Vue.use(firestorePlugin)

const plugin: Plugin = function ({ app, store }) {
  let ready = false
  auth.onAuthStateChanged(async (user) => {
    if (user) app.$axios.setToken(await user.getIdToken(), 'Bearer')
    else app.$axios.setToken(false)

    await store.dispatch('auth/fetchUser')
    ready = true
  })
  return new Promise(resolve => {
    if (ready) return resolve()
    let interval = setInterval(() => {
      if (ready) {
        clearInterval(interval)
        resolve()
      }
    }, 50)
  })
}

export default plugin
