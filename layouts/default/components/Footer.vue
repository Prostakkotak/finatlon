<template>
  <footer class="footer">
    <div class="footer__row">
      <div class="footer__info">
        <div class="footer__info-text">Социальные сети</div>
        <div class="footer__info-links">
          <i class="pi pi-telegram"></i>
          <i class="pi pi-facebook"></i>
          <i class="pi pi-instagram"></i>
        </div>
      </div>

      <div class="footer__info">
        <div class="footer__info-text">Разработка сайта</div>
        <div class="footer__info-links">
          <img src="@/static/mospolytech-logo.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
  <div class="footer__row" style="margin-top: var(--layout-gap-xxl)">
    <img src="@/static/domrf.png" alt="" />
    <img src="@/static/fondfingramotnost.png" alt="" />
    <img src="@/static/ifru.jpg" alt="" />
    <img src="@/static/logo_vss.png" alt="" />
    <img src="@/static/nifru.jpg" alt="" />
    <img src="@/static/spfu.jpg" alt="" />
  </div>
</template>
<script></script>
<style scoped lang="scss">
.footer {
  padding: var(--layout-gap-xxl) var(--layout-padding-horizontal);
  margin: 0 calc(var(--layout-padding-horizontal) * -1);
  background-color: var(--primary-color);
  color: var(--primary-color-text);

  &__row {
    display: flex;
    justify-content: space-around;
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
      }
    }
  }
}
</style>
