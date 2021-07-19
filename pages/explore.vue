<template>
  <div class="container-fluid min-h-screen mb-10 pt-5">
    <div class="w-11/12 sm:w-9/12 md:w-1/2 text-center mx-auto">
      <h4 class="text-xl font-semibold">Explore</h4>
      <div
        class="
          flex
          items-center
          justify-between
          h-16
          w-full
          border border-red-900
          rounded-full
          mt-3
          px-2
        "
      >
        <input
          v-model="searchItem"
          type="search"
          class="w-10/12 px-4 h-14 rounded-full focus:outline-none"
          placeholder="Search restaurants or items"
          @input="search"
        />
        <span
          class="
            flex
            items-center
            justify-center
            bg-red-900
            h-14
            rounded-full
            w-14
          "
        >
          <icon-search class="h-5 w-5 text-white"></icon-search>
        </span>
      </div>
    </div>
    <div
      v-if="searchItem && items == ''"
      class="items-center h-96 flex justify-center"
    >
      No restaurants or items found
    </div>
    <div v-if="searchItem && items != ''" class="mt-5">
      <h1 class="text-xl font-semibold py-5 ml-5 border-b border-gray-400">
        Search items
      </h1>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-4
          mt-10
        "
      >
        <div v-for="(item, i) in items" :key="i" class="h-40 bg-red-900">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchItem: '',
      items: [],
    }
  },
  methods: {
    search() {
      this.items = []
      this.$axios.get(`/search?name=${this.searchItem}`).then((res) => {
        this.items = res.data
      })
    },
  },
}
</script>