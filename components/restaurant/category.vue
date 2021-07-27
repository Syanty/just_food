<template>
    <div class="mt-5">
        <h1 class="text-3xl font-bold p-2 border-b border-gray-200">Cat {{cat}}</h1>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4">
            <food-card v-for="i in 7" :key="i" :cat="cat" :food="i"></food-card>
        </div>
    </div>
</template>
<script>
export default {
    props:['cat']
}
</script>