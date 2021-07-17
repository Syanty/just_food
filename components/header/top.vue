<template>
  <nav
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed top-0 flex items-center w-full h-20 text-sm font-bold  bg-red-50"
  >
    <div
      class="flex items-center justify-between h-16 p-2 px-4 container-fluid"
    >
      <justfood-logo class="flex items-center h-12"></justfood-logo>

      <div class="items-center hidden p-1 md:flex">
        <!-- nav links -->
        <nuxt-link
          v-for="(link, i) in links"
          :key="i"
          class="header_link"
          :class="
            link.title === 'signup'
              ? 'px-4 font-semibold text-red-900 bg-white border-2 border-red-900 rounded-full shadow-md  hover:bg-red-900 hover:text-white header_link hover:shadow-xl'
              : ''
          "
          :to="link.to"
        >
          <component
            :is="`icon-${link.icon}`"
            v-show="link.title != 'signup'"
            class="w-4 h-4"
          >
          </component>
          {{ link.title }}</nuxt-link
        >
      </div>
      <div class="relative md:hidden">
        <!-- nav dropdown button -->
        <button
          class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  hover:shadow-xl"
          @click="dropdown = !dropdown"
        >
          <icon-down class="w-6 h-6 text-red-900"></icon-down>
        </button>
        <!-- dropdown -->
        <ul
          v-if="dropdown"
          class="absolute right-0 w-40 py-2 bg-white border border-gray-400 rounded-md  top-10"
        >
          <li v-for="(link, i) in links" :key="i">
            <nuxt-link class="rounded-md header_link drop_link" :to="link.to">
              <component :is="`icon-${link.icon}`" class="w-4 h-4 mr-5">
              </component>
              {{ link.title }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      dropdown: false,
      view: {
        atTopOfPage: true,
      },
      links: [
        {
          title: 'explore',
          to: '/explore',
          icon: 'search',
        },
        {
          title: 'signin',
          to: '/signin',
          icon: 'user',
        },
        {
          title: 'signup',
          to: '/signup',
          icon: 'user-add',
        },
        {
          title: 'cart',
          to: '/cart',
          icon: 'cart',
        },
      ],
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
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
<style scoped>
.header_link {
  display: flex;
  align-items: center;
}
.drop_link:hover {
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
}
</style>