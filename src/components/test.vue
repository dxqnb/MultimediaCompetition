<template>
  <button @click="swiper.slideNext()">Slide to the next slide</button>
</template>
<script>
  import { useSwiper } from 'swiper/vue';

  export default {
    setup() {
      const swiper = useSwiper();

      return {
        swiper,
      };
    },
  };
</script>