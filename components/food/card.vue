<template>
    <div class="h-64 shadow-2xl rounded-md">
        <div class="h-3/5 rounded-t-md bg-gray-500 flex items-center justify-center">food{{cat}}{{food}}</div>
        <div class="h-2/5">
            <h2 class="text-2xl font-bold text-center">Food {{food}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    props:['cat','food']
}
</script>