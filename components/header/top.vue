<template>
  <nav
    :class="{ scrolled: !view.atTopOfPage }"
    class="
      fixed
      top-0
      flex
      items-center
      w-full
      h-20
      text-sm
      font-bold
      bg-red-50
    "
  >
    <div
      class="flex items-center justify-between h-16 p-2 px-4 container-fluid"
    >
      <nuxt-link to="/"
        ><justfood-logo class="flex items-center h-12"></justfood-logo
      ></nuxt-link>

      <header-right-links></header-right-links>
      <header-dropdown></header-dropdown>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    },
  },
}
</script>


