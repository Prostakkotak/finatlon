<template>
  <div>
    <Heading> Новости </Heading>
    <div class="news">
      <Card v-for="news in data.news" :key="news.name">
        <template #header>
          <img :src="news.content.content" alt="" />
        </template>
        <template #title> {{ news.content.title }} </template>
        <template #subtitle> {{ news.content.source }} </template>
        <template #content>
          <div v-html="news.content.html"></div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      const elements = this.$store.main.elements
      return {
        news: elements.news,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.news {
  padding-top: var(--layout-gap-xxl);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--layout-gap-xxl);
}
</style>
