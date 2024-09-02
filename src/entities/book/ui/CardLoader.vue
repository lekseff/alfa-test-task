<script setup lang="ts"></script>

<template>
  <v-skeleton-loader type="image, paragraph" class="card__loader align-start border rounded-lg" />
</template>

<style scoped lang="scss">
card__loader {
  :deep(.v-skeleton-loader__image) {
    height: 200px;
    border-radius: 6px 6px 0 0;
  }
}
</style>
