<template>
  <div class="flex h-32 items-center justify-center" :class="section === 'offer'?'bg-white':'bg-red-900'">
    {{ slide }}
  </div>
</template>
<script>
export default {
  props: {
      slide:{
          type:String,
           default:""
      },
       section:{
          type:String,
           default:""
      },
     
  },
}
</script>