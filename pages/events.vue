<template>
  <div>
    <Heading> События </Heading>
    <div class="events">
      <Card v-for="event in data.events" :key="event.name">
        <template #header>
          <iframe
            v-if="event.content.content.includes('rutube')"
            loading="lazy"
            :src="event.content.content"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
          <iframe
            v-else
            loading="lazy"
            :src="event.content.content"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </template>
        <template #title>
          {{ event.content.desc }}
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
        events: elements.events,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.events {
  padding-top: var(--layout-gap-xxl);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--layout-gap-xxl);
}
</style>
