<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="i in 10"
      :key="i"
      :class="section === 'offer' ? 'bg-red-900' : ''"
      class="h-40 p-4"
    >
      <carousel-slide :slide="i" :section="section"></carousel-slide>
    </div>
    <template #prevArrow="arrowOption">
      <div>{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
    </template>
    <template #nextArrow="arrowOption">
      <div>{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
    </template>
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
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
             
            },
          },
        ],
      },
    }
  },
}
</script>
<style scoped>
.slick-prev:before,
.slick-next:before {
  color: red !important;
}
</style>