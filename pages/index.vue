<template>
  <b-container>
    Page
    {{ user }}
  </b-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator'
  import { Auth, User } from '~/store/auth'

  @Component({
    middleware: ['auth'],
  })
  export default class IndexPage extends Vue {
    @Auth.State('user') user: User
  }
</script>
