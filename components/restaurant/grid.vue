<template>
  <div
    class="
      grid grid-cols-1
      mt-5
      sm:grid-cols-2
      md:grid-cols-3
      sm:gap-4
      lg:grid-cols-4
    "
  >
   <restaurant-card v-for="i in 20" :key="i" :restaurant="i"></restaurant-card>
  </div>
</template>
<style scoped>
.featured {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%);
}
</style>