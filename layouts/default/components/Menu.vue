<template>
  <Menubar :model="menu" class="app-menu" />
</template>
<script>
export default {
  computed: {
    menu() {
      return [
        {
          label: 'Главная',
          icon: 'pi pi-home',
        },
        {
          label: 'О проекте',
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
            },
            {
              label: 'События',
            },
          ],
        },
        {
          label: 'Отзывы',
        },
        {
          label: 'Профориентация',
          items: [
            {
              label: 'Льготы',
            },
          ],
        },
        {
          label: 'Для спонсоров',
        },
        {
          label: 'Благодарности',
        },
        {
          label: 'Контакты',
        },
      ]
    },
  },
}
</script>
<style scoped lang="scss">
.app-menu {
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
}
</style>
