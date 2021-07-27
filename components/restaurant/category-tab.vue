<template>
    <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-2">
        <div v-for="i in 10" :key="i" class=" p-1">
            <p class="p-2 w-11/12 mx-auto rounded-lg hover:bg-red-900 text-white text-center cursor-pointer bg-gray-500 min-w-max">Restaurant cat {{i}}</p>
        </div>
    </div>
</template>