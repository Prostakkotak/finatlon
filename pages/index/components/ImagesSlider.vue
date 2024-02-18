<template>
  <Carousel
    class="carousel"
    :value="carouselVals"
    :numVisible="1"
    :numScroll="1"
    :autoplay-interval="8000"
  >
    <template #item="slotProps">
      <div class="carousel-item">
        <div class="carousel-item__bg-image border-radius">
          <img :src="`${slotProps.data.image}`" alt="image" />
        </div>
        <div class="carousel-item__text">
          <div class="carousel-item__text-name border-radius text-primary-bg">
            {{ slotProps.data.name }}
          </div>
          <div class="carousel-item__text-description border-radius">
            {{ slotProps.data.description }}
          </div>
          <Button
            class="carousel-item__button"
            label="Подробнее"
            @click="slotProps.data.command()"
          />
        </div>
      </div>
    </template>
  </Carousel>
</template>
<script>
export default {
  computed: {
    carouselVals() {
      return [
        {
          id: 1,
          name: 'Финатлон для старшеклассников',
          description:
            'Всероссийская олимпиада по финансовой грамотности, устойчивому развитию и защите прав потребителей финансовых услуг',
          image: '/studenti_2.jpg',
          command: () => {
            this.$router.push({ name: 'about' })
          },
        },
        {
          id: 2,
          name: 'Олимпиада',
          description:
            'по финансовой грамотности, финансовому рынку и защите прав потребителей финансовых услуг',
          image: '/studenti.jpg',
          command: () => {
            this.$router.push({ name: 'about' })
          },
        },
      ]
    },
  },
}
</script>
<style scoped lang="scss">
.carousel {
  border-radius: var(--border-radius-lg);
  overflow: hidden;

  :deep {
    .p-carousel-next,
    .p-carousel-prev {
      display: none;
    }

    .p-carousel-indicators {
      display: none;
    }
  }

  &-item {
    position: relative;

    &__button {
      width: min-content;
      margin-left: auto;
    }

    &__text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: var(--layout-gap-xs);

      &-name {
        width: min-content;
        text-wrap: nowrap;
        font-size: 1.1rem;
        background-color: var(--primary-color);
      }

      &-description {
        background-color: var(--surface-ground);
      }

      &-name,
      &-description {
        padding: var(--layout-gap-sm);
      }
    }

    &__bg-image {
      margin: 0 auto;

      img {
        display: block;
        width: 100%;
        pointer-events: none;
        user-select: none;
      }
    }
  }
}

@media (max-width: 500px) {
  .carousel {
    display: none;
  }
}
</style>
