<template>
  <div class="flex flex-col h-screen justify-between">
    <header-top></header-top>
    <nuxt class="mt-20" />
    <footer-base></footer-base>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  async fetch() {
    if (this.isAuthenticated) {
      await this.$axios
        .$get('/auth/user/profile/', {
          params: {
            secret_token: this.$auth.strategy.token.get().slice(7),
          },
        })
        .then((res) => {
          this.$auth.setUser(res.user)
        })
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>