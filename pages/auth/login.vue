<template>
  <b-container>
    <b-form>
      <b-form-group>
        <b-button @click="loginWithGoogle()">Login with Google</b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import firebase from 'firebase'
  import { auth } from '~/lib/firebase'

  @Component({
    middleware: [],
  })
  export default class AuthLoginPage extends Vue {

    loginWithGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.loginWithProvider(provider)
    }

    async loginWithProvider (provider: firebase.auth.AuthProvider) {
      try {
        await auth.signInWithPopup(provider)
        this.$router.push('/')
      } catch (e) {
        if (e.code === 'auth/popup-closed-by-user') return;
        console.log(e)
        alert(e.message)
      }
    }
  }
</script>
