<template>
  <VueSlickCarousel v-bind="settings" class=" bg-gradient-to-r from-gray-100 to-gray-300 mt-5">
    <div v-for="i in 10" :key="i" class="h-52 w-40 p-4">
      <div class="bg-red-900 rounded-full w-32 mx-auto h-32"></div>
      <div class="w-32 h-12 text-center p-1 mx-auto"><button class="btn_rounded">Category {{ i }}</button></div>
    </div>
  </VueSlickCarousel>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    section: { type: String, default: '' },
  },
  data() {
    return {
      settings: {
        slidesToShow: 6,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              arrows:true
            },
          },
        ],
      },
    }
  },
}
</script>

<style >
.slick-prev::before,
.slick-next::before {
  color: rgba(127, 29, 29) !important;
}
</style>