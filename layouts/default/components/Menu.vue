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
              'about',
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
          command: () => {
            this.openPage('about')
          },
          items: [
            {
              label: 'Официальные документы',
              class: this.page === 'docs' && 'active',
              command: () => {
                this.openPage('docs')
              },
            },
            {
              label: 'Учебно-методические материалы',
              class: ['extra-materials'].includes(this.page) && 'active',
              command: () => {
                this.openPage('learning-materials')
              },
              items: [
                {
                  label: 'Дополнительные материалы',
                  class: this.page === 'extra-materials' && 'active',
                  command: () => {
                    this.openPage('extra-materials') && 'active'
                  },
                },
              ],
            },
            {
              label: 'Видеолекции',
              class: this.page === 'materials' && 'active',
              command: () => {
                this.openPage('materials')
              },
            },
            {
              label: 'Организаторы',
              class: this.page === 'orgs' && 'active',

              command: () => {
                this.openPage('orgs')
              },
            },
            {
              label: 'Партнеры',
              class: this.page === 'partners' && 'active',

              command: () => {
                this.openPage('partners')
              },
            },
            {
              label: 'Информационые партнеры',
              class: this.page === 'info-partners' && 'active',
              command: () => {
                this.openPage('info-partners')
              },
            },
            {
              label: 'История',
              class: this.page === 'history' && 'active',
              command: () => {
                this.openPage('history')
              },
            },
            {
              label: 'География проекта',
              class: this.page === 'geografy' && 'active',
              command: () => {
                this.openPage('geografy')
              },
            },
            {
              label: 'СМИ о нас',
              class: this.page === 'media' && 'active',
              command: () => {
                this.openPage('media')
              },
            },
            {
              label: 'Развитие проекта',
              class: this.page === 'future' && 'active',
              command: () => {
                this.openPage('future')
              },
            },
          ],
        },
        {
          label: 'Новости',
          class: ['events', 'news'].includes(this.page) && 'active',
          items: [
            {
              label: 'Новости',
              class: this.page === 'news' && 'active',
              command: () => {
                this.openPage('news')
              },
            },
            {
              label: 'События',
              class: this.page === 'events' && 'active',
              command: () => {
                this.openPage('events')
              },
            },
          ],
        },
        {
          label: 'Профориентация',
          items: [
            {
              label: 'Льготы',
              class: this.page === 'fhelp' && 'active',
              command: () => {
                this.openPage('lgoty')
              },
            },
          ],
          command: () => {
            this.openPage('proforientation')
          },
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
