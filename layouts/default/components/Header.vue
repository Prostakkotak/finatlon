<template>
  <header class="app-header">
    <div class="app-header__nav-status">
      <div><Tag value="Статус проекта" />:</div>
      <div>{{ $store.main.elements.currentStage[0].content }}</div>
    </div>
    <div class="app-header__nav">
      <Menubar :model="menu" class="app-header__nav-menu" />

      <Divider layout="vertical" />

      <div class="app-header__nav-buttons">
        <a target="_blank" href="https://www.facebook.com/olimpiadaifru/">
          <i class="pi pi-facebook" />
        </a>

        <a
          target="_blank"
          class="app-header__icon"
          href="https://vk.com/olimpiadaifru"
          ><Vk
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
import Vk from '~/static/vk.vue'

export default {
  computed: {
    menu() {
      return [
        {
          label: 'Организаторы',
          command: () => {
            this.$router.push({ name: 'orgs' })
          },
        },
        {
          label: 'Партнеры',
          command: () => {
            this.$router.push({ name: 'partners' })
          },
        },
        {
          label: 'Информационные партнеры',
          command: () => {
            this.$router.push({ name: 'info-partners' })
          },
        },
        {
          label: 'Реквизиты',
          command: () => {
            this.$router.push({ name: 'requisits' })
          },
        },
      ]
    },
  },
  components: { Vk },
}
</script>
<style scoped lang="scss">
.app {
  &-header {
    width: calc(100vw - var(--layout-padding-horizontal) * 2);
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
      background: transparent;
      color: var(--primary-color-text);
    }

    &__icon {
      :deep svg {
        height: calc(var(--font-size) * 2.1);
        width: calc(var(--font-size) * 2.1);

        path {
          fill: #fff;
        }
      }
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
        align-items: center;

        i {
          font-size: 1.8rem;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
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

@media (max-width: 960px) {
  .app {
    &-header {
      flex-direction: row-reverse;
    }
  }

  :deep {
    .p-menubar-root-list {
      background: var(--primary-color);
      border: none;
      border-radius: var(--border-radius);
    }
  }
}

@media (max-width: 600px) {
  .app {
    &-header {
      height: auto;
      flex-direction: column;
      align-items: start;

      &__nav-status {
        flex-direction: column;
        align-items: start;

        :deep * {
          padding: 0;
        }
      }
    }
  }
}
</style>
