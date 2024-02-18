<template>
  <footer class="footer">
    <div class="footer__row">
      <div class="footer__info">
        <div class="footer__info-text">Социальные сети</div>
        <div class="footer__info-links">
          <a target="_blank" href="https://www.facebook.com/olimpiadaifru/">
            <i class="pi pi-facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/fin_olimp/">
            <i class="pi pi-instagram" />
          </a>
          <a
            target="_blank"
            href="https://vk.com/olimpiadaifru"
            class="footer__icon"
          >
            <Vk />
          </a>
        </div>
      </div>

      <div class="footer__info">
        <div class="footer__info-text">Разработка сайта</div>
        <a
          class="footer__info-links"
          href="https://mospolytech.ru/obuchauschimsya/proektnaya-deyatelnost/"
          target="_blank"
        >
          <img src="@/static/mospolytech-logo.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import Vk from '~/static/vk.vue'

export default {
  components: {
    Vk,
  },
}
</script>
<style scoped lang="scss">
.footer {
  padding: var(--layout-gap-xxl) var(--layout-padding-horizontal);
  margin: 0 calc(var(--layout-padding-horizontal) * -1);
  margin-top: var(--layout-gap);
  background-color: var(--primary-color);
  color: var(--primary-color-text);

  &__row {
    display: flex;
    justify-content: space-around;
  }

  &__icon {
    :deep {
      svg {
        width: calc(var(--font-size) * 1.7);
        height: calc(var(--font-size) * 1.7);

        path {
          fill: #fff;
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--layout-gap);

    &-links {
      display: flex;
      gap: var(--layout-gap);
      align-items: center;

      i {
        font-size: 1.5rem;
        color: #fff;
      }
    }
  }
}
</style>
