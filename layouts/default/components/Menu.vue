<template>
  <Menubar :model="menu" class="app-menu" />
</template>
<script>
export default {
  computed: {
    page() {
      return this.$route.name
    },
    menu() {
      return [
        {
          label: 'Главная',
          icon: 'pi pi-home',
          active: true,
          class: this.page === 'index' && 'active',
          command: () => {
            this.openPage('index')
          },
        },
        {
          label: 'О проекте',
          class:
            [
              'docs',
              'materials',
              'lections',
              'orgs',
              'partners',
              'info-partners',
              'history',
              'geografy',
              'media',
              'future',
            ].includes(this.page) && 'active',
          items: [
            {
              label: 'Официальные документы',
            },
            {
              label: 'Учебно-методические материалы',
              items: [
                {
                  label: 'Дополнительные материалы',
                },
              ],
            },
            {
              label: 'Видеолекции',
            },
            {
              label: 'Организаторы',
            },
            {
              label: 'Партнеры',
            },
            {
              label: 'Информационые партнеры',
            },
            {
              label: 'История',
            },
            {
              label: 'География проекта',
            },
            {
              label: 'СМИ о нас',
            },
            {
              label: 'Развитие проекта',
            },
          ],
        },
        {
          label: 'Новости',
          items: [
            {
              label: 'Новости',
              class: this.page === 'news' && 'active',
            },
            {
              label: 'События',
              class: this.page === 'events' && 'active',
            },
          ],
        },
        {
          label: 'Отзывы',
          class: this.page === 'reviews' && 'active',
        },
        {
          label: 'Профориентация',
          items: [
            {
              label: 'Льготы',
              class: this.page === 'fhelp' && 'active',
            },
          ],
        },
        {
          label: 'Для спонсоров',
          class: this.page === 'for-sponsors' && 'active',
          command: () => {
            this.openPage('for-sponsors')
          },
        },
        {
          label: 'Благодарности',
          class: this.page === 'thankies' && 'active',
          command: () => {
            this.openPage('thankies')
          },
        },
        {
          label: 'Контакты',
          class: this.page === 'contacts' && 'active',
          command: () => {
            this.openPage('contacts')
          },
        },
      ]
    },
  },
  methods: {
    openPage(name) {
      this.$router.push({ name })
    },
  },
}
</script>
<style scoped lang="scss">
.app-menu {
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
}
</style>
