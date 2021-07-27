<template>
  <div class="w-full">
    <restaurant-hero></restaurant-hero>
    <div class="container-fluid mt-5">
      <restaurant-search :placeholder="'Search items'"></restaurant-search>
      <restaurant-category-tab class="border-b border-gray-400 pb-5"></restaurant-category-tab>
      <restaurant-category v-for="i in 10" :key="i" :cat="i"></restaurant-category>
    </div>

  </div>
</template>