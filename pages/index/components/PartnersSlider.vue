<template>
  <div class="app-block">
    <Carousel
      class="partners-cards"
      :value="carouselVals"
      :numVisible="4"
      :numScroll="1"
      :autoplay-interval="3000"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="partners-cards__card">
          <img :src="`${slotProps.data.image}`" />
        </div>
      </template>
    </Carousel>
  </div>
</template>
<script>
export default {
  computed: {
    carouselVals() {
      return [
        { image: '/club.png' },
        { image: '/finatlon.png' },
        { image: '/fond.png' },
        { image: '/fps.png' },
        { image: '/ifru.png' },
        { image: '/moex.png' },
        { image: '/vss.jpg' },
      ]
    },
    responsiveOptions() {
      return [
        {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: '800px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 1,
        },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.partners-cards {
  &__card {
    max-width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }
  }

  :deep {
    .p-carousel-indicators {
      display: none;
    }
  }
}
</style>
