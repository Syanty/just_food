<template>
  <div class="h-80 bg-gradient-to-br from-red-50 to-red-900 w-full">
    <div class="absolute top-40 left-20 bg-white h-40 w-96 p-6">
      <h2 class="text-2xl font-bold uppercase">{{ $route.params.slug }}</h2>
      <p class="flex items-center">time to deliver <span class="flex items-center"> <icon-star class="w-5 h-5"></icon-star> rating </span></p>
      <p>address</p>
      <p>description</p>
    </div>
  </div>
</template>
