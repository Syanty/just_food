<template>
  <div class="container-fluid py-5 p-4">
    <div class="grid grid-cols-1 gap-4 md:gap-0 sm:grid-cols-2">
     <restaurant-search :placeholder="'Search restaurants'"></restaurant-search>
      <div class="flex items-end justify-center sm:justify-end">
        <button class="btn_outlined w-40 flex items-center justify-center">
          Delivered <icon-check-circle class="h-5 w-5"></icon-check-circle>
        </button>
        <button class="btn_active w-40">Self-Pickup</button>
      </div>
    </div>
    <restaurant-grid></restaurant-grid>
  </div>
</template>
