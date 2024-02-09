<template>
  <header class="app-header">
    <div class="app-header__nav-status">
      <div><Tag value="Статус проекта" />:</div>
      <div>Отборочный тур с 26.12 по 20.01</div>
    </div>
    <div class="app-header__nav">
      <Menubar :model="menu" class="app-header__nav-menu" />

      <Divider layout="vertical" />

      <div class="app-header__nav-buttons">
        <i class="pi pi-telegram" />
        <i class="pi pi-facebook" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    menu() {
      return [
        {
          label: 'Организаторы',
        },
        {
          label: 'Партнеры',
        },
        {
          label: 'Информационные партнеры',
        },
        {
          label: 'Реквизиты',
        },
      ]
    },
  },
}
</script>
<style scoped lang="scss">
.app {
  &-header {
    top: 0;
    position: fixed;
    width: calc(100% - var(--layout-padding-horizontal) * 2);
    height: var(--header-height);
    z-index: 1000;
    padding: 0 var(--layout-gap);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
    background: var(--primary-color);
    color: var(--primary-color-text);

    *,
    :deep * {
      text-wrap: nowrap;
      flex-wrap: nowrap;
      background: var(--primary-color);
      color: var(--primary-color-text);
    }

    &__nav {
      display: flex;
      align-items: center;
      justify-content: end;

      &-status {
        display: flex;
        align-items: center;
        gap: var(--layout-gap-xs);
      }

      &-buttons {
        display: flex;
        gap: var(--layout-gap-sm);

        i {
          font-size: 1.8rem;
          cursor: pointer;
          transition: var(--transition-duration);

          &:hover {
            opacity: 0.7;
          }
        }
      }

      &-menu {
        border: 0;
      }
    }
  }
}
</style>
