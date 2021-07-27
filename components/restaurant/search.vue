<template>
  <div class="flex items-center">
    <div
      class="
        flex
        items-center
        justify-between
        h-12
        w-full
        border border-red-900
        rounded-md
        mt-3
        px-2
      "
    >
      <input
        type="search"
        class="w-10/12 px-4 h-10 rounded-full focus:outline-none"
        :placeholder="placeholder"
      />
      <span
        class="
          flex
          items-center
          justify-center
          bg-red-900
          h-10
          rounded-full
          w-10
        "
      >
        <icon-search class="h-5 w-5 text-white"></icon-search>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props:['placeholder']
}
</script>