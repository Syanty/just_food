<template>
  <nuxt-link :to="`/${isFood ? 'category/?slug=':'restaurants/'}${slide}`" class="flex h-32 items-center justify-center" :class="section === 'offer'?'bg-white':'bg-red-900'">
    {{ slide }}
  </nuxt-link>
</template>
<script>
export default {
  props:['slide','section','isFood']
}
</script>