<template>
  <LayoutContent>
    <div class="app">
      <Header />
      <div class="app-wrap">
        <Contacts />
        <Menu />

        <slot></slot>
      </div>
      <Footer />
    </div>
  </LayoutContent>
</template>
<script>
import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Contacts,
    Menu,
    Footer,
  },
}
</script>
<style scoped lang="scss">
.app {
  padding: 0 var(--layout-padding-horizontal);

  &-wrap {
    border-radius: 30px;
  }
}
</style>
