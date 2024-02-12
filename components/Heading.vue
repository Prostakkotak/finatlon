<template>
  <div class="title">
    <div class="title__decorator"></div>
    <div class="title__text">
      <slot></slot>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  gap: var(--layout-gap-sm);
  font-size: 2rem;
  margin: var(--layout-gap-xxl) 0 var(--layout-gap) 0;

  &__decorator {
    width: 6px;
    height: 40px;
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
  }
}
</style>
