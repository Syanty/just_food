<template>
  <div class="bg-red-200 w-full">
    <div
      class="
        p-6
        py-10
        container-fluid
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      <div class="flex items-center justify-center">
        <icon-facebook class="h-8 w-8 mr-2 text-blue-900 cursor-pointer" fill="currentColor"></icon-facebook>
        <icon-google-plus class="h-8 w-8 mr-2 text-red-500 cursor-pointer" fill="currentColor"></icon-google-plus>
        <icon-instagram class="h-8 w-8 text-pink-500 cursor-pointer" fill="currentColor"></icon-instagram>
      </div>
      <div v-for="i in 3" :key="i" class="p-4">
        <h2 class="text-xl font-bold lg:text-left text-center">Title {{i}}</h2>
        <ul>
          <li
            v-for="j in 5"
            :key="j"
            class="flex items-center lg:justify-start justify-center"
          >
            list {{i}} {{ j }}
          </li>
        </ul>
      </div>
    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>