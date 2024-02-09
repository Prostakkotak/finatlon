<template>
  <div class="app-contacts">
    <div class="app-contacts__logo-wrap">
      <img src="@/static/logo.png" alt="Logo" class="app-header__logo" />

      <div class="app-contacts__logo-text">
        ВСЕРОССИЙСКАЯ ОЛИМПИАДА ПО ФИНАНСОВОЙ ГРАМОТНОСТИ, УСТОЙЧИВОМУ РАЗВИТИЮ
        И ЗАЩИТЕ ПРАВ ПОТРЕБИТЕЛЕЙ ФИНАНСОВЫХ УСЛУГ
      </div>
    </div>

    <ul class="app-contacts__contacts-list">
      <li class="app-contacts__contact">
        <i class="pi pi-phone app-contacts__contact-icon" />

        <div>
          <div class="app-contacts__contact-text">+7 (495) 369-04-02 доб.5</div>
          <div class="app-contacts__contact-text">olimpiada@ifru.ru</div>
        </div>
      </li>
      <li class="app-contacts__contact">
        <i class="pi pi-home app-contacts__contact-icon" />

        <div>
          <div class="app-contacts__contact-text">107018 Москва</div>
          <div class="app-contacts__contact-text">
            ул. Сущевский вал, д.16, стр.4.
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>
<style scoped lang="scss">
.app {
  &-contacts {
    padding: var(--layout-gap) var(--layout-gap-xl);
    background-color: var(--surface-ground);
    border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      &-wrap {
        display: flex;
        align-items: center;
        gap: var(--layout-gap);

        img {
          height: 70px;
        }
      }

      &-text {
        max-width: 30ch;
        font-size: 0.85rem;
      }
    }

    &__contacts-list {
      display: flex;
      align-items: center;
      gap: var(--layout-gap);
    }

    &__contact {
      display: flex;
      align-items: center;
      gap: var(--layout-gap);

      &-icon {
        font-size: 1.8rem;
      }

      &-text {
        &:last-child {
          opacity: 0.7;
        }

        &:first-child {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
