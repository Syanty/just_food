<template>
  <div class="items-center hidden p-1 md:flex relative">
    <!-- nav links -->
    <nuxt-link class="header_link" to="/explore">
      <icon-search class="w-4 h-4"></icon-search>
      explore
    </nuxt-link>

    <span v-if="!isAuthenticated" class="flex items-center">
      <nuxt-link class="header_link" to="/account/signin">
        <icon-user class="w-4 h-4"></icon-user>
        signin
      </nuxt-link>
      <nuxt-link
        class="
          header_link
          px-4
          font-semibold
          text-red-900
          bg-white
          border-2 border-red-900
          rounded-full
          shadow-md
          hover:bg-red-900
          hover:text-white
          header_link
          hover:shadow-xl
        "
        to="/account/signup"
      >
        <icon-user-add class="w-4 h-4"></icon-user-add>
        signup
      </nuxt-link>
    </span>
    <div
      v-if="isAuthenticated"
      class="
        header_link
        relative
        p-3
        cursor-pointer
        font-semibold
        text-red-900
        bg-white
        border-2 border-red-900
        rounded-full
        shadow-md
        header_link
        hover:shadow-2xl
      "
      @click="profileDropdown = !profileDropdown"
    >
      <icon-user-circle class="w-4 h-4"></icon-user-circle>
      <p class="truncate">{{ loggedInUser.first_name }}</p>
      <icon-chevron-down class="h-5 w-5"></icon-chevron-down>
    </div>
    <ul
      v-if="profileDropdown"
      class="
        absolute
        right-0
        w-40
        p-2
        bg-white
        border border-gray-400
        rounded-md
        top-14
      "
    >
      <li class="p-2 rounded-md">
        <nuxt-link to="/account/profile">View Profile</nuxt-link>
      </li>
      <li class="p-2 rounded-md cursor-pointer" @click="logout">Logout</li>
    </ul>
    <nuxt-link class="header_link" to="/cart">
      <icon-cart class="w-4 h-4"></icon-cart>
      cart
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
          absolute
          -top-2
          right-1
        "
        >10</span
      >
    </nuxt-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      profileDropdown: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
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