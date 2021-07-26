<template>
  <div class="relative md:hidden">
    <!-- nav dropdown button -->
    <button
      class="
        flex
        items-center
        justify-center
        w-10
        h-10
        bg-white
        rounded-full
        shadow-lg
        hover:shadow-xl
      "
      @click="dropdown = !dropdown"
    >
      <icon-down class="w-6 h-6 text-red-900"></icon-down>
    </button>
    <!-- dropdown -->
    <ul
      v-if="dropdown"
      class="
        absolute
        right-0
        w-40
        py-2
        bg-white
        border border-gray-400
        rounded-md
        top-10
      "
    >
      <li>
        <nuxt-link class="header_link" to="/explore">
          <icon-search class="w-4 h-4"></icon-search>
          explore
        </nuxt-link>
      </li>
      <li v-if="!isAuthenticated">
        <nuxt-link class="header_link" to="/account/signin">
          <icon-user class="w-4 h-4"></icon-user>
          signin
        </nuxt-link>
      </li>
      <li v-if="!isAuthenticated">
        <nuxt-link class="header_link" to="/account/signup">
          <icon-user-add class="w-4 h-4"></icon-user-add>
          signup
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          v-if="isAuthenticated"
          class="
            header_link
            px-4
            font-semibold
            text-red-900
            bg-white
            border-2 border-red-900
            rounded-full
            shadow-md
            header_link
            hover:shadow-2xl
          "
          to="/account/profile"
        >
          <icon-user-circle class="w-4 h-4"></icon-user-circle>
          <p class="truncate">{{ loggedInUser.first_name }}</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="header_link flex items-center justify-between"
          to="/cart"
        >
          <span class="flex items-center"
            ><icon-cart class="w-4 h-4"></icon-cart> cart</span
          >
          <span
            class="
              bg-red-600
              text-xs text-white
              flex
              items-center
              justify-center
              rounded-full
              p-1
              h-6
              w-6
            "
            >10</span
          >
        </nuxt-link>
      </li>
      <li v-if="isAuthenticated" class="p-2 rounded-md cursor-pointer flex items-center" @click="logout">
        <icon-logout class="h-5 w-5 transform rotate-180"></icon-logout> Logout
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      dropdown: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$store.commit('helper/setSuccess', 'User is logged out')
      this.profileDropdown = false
    },
  },
}
</script>
<style scoped>
.header_link {
  display: flex;
  align-items: center;
}
li:hover {
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
}
</style>