<template>
    <div class="p-6">
        <h1 class="font-mono font-bold text-2xl py-6"><slot name="title"/></h1>
        <p class="text-gray-500 font-medium"><slot name="content"/></p>
        <button class="btn_large mt-5"><slot name="button"/></button>
    </div>
</template>