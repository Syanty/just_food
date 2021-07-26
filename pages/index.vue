<template>
  <div class="w-full">
    <section-hero />
    <section-special-offer></section-special-offer>
    <section-featured-restaurant></section-featured-restaurant>
    <section-food-near-me></section-food-near-me>
    <section-freshmart></section-freshmart>
    <section-restaurant-partner></section-restaurant-partner>
    <section-rider-partner></section-rider-partner>
    <section-download></section-download>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async fetch() {
    if (this.isAuthenticated) {
      const user = await this.$axios
        .$get('/auth/user/profile/', {
          params: {
            secret_token: this.$auth.strategy.token.get().slice(7),
          },
        })
        .then((res) => {
          return res.user
        })
      this.$auth.setUser(user)
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
}
</script>
