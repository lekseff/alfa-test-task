<script setup lang="ts">
import { ROUTE_NAMES } from '@/app/plugins/router/names'
</script>

<template>
  <div class="d-flex justify-end">
    <RouterLink :to="{ name: ROUTE_NAMES.products }">
      <v-btn variant="outlined">На главную</v-btn>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
