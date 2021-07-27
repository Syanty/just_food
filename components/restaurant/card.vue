<template>
    <nuxt-link :to="`/restaurants/restaurant-${restaurant}`"  class="h-72 shadow-2xl rounded-md">
      <div class="h-3/5 bg-red-900 rounded-t-md"></div>
      <div class="h-2/5 text-sm">
        <h4 class="font-bold text-lg">Restaurant {{ i }}</h4>
        <div class="flex items-center justify-between text-white">
          <p class="bg-green-600 p-1">Open</p>
          <p class="bg-red-900 p-1 featured w-24 text-center">Featured</p>
        </div>
        <div
          class="
            p-3
            mt-2
            border-t border-gray-200
            flex
            items-center
            justify-start
          "
        >
          <div class="text-yellow-500 flex items-center px-2">
            <icon-star class="w-5 h-5"></icon-star> <span>4</span>
          </div>
          <div class="px-2 flex items-center text-gray-500">
            <icon-clock class="h-5 w-5"></icon-clock> <span>45 min</span>
          </div>
          <div class="flex items-center px-2">
            <icon-heart class="h-5 w-5 text-pink-500"></icon-heart>
          </div>
        </div>
      </div>
    </nuxt-link>
</template>
<script>
export default {
    props:['restaurant']
}
</script>