<script setup lang="ts">
import { ROUTE_NAMES } from '@/app/plugins/router/names.js'
</script>

<template>
  <div class="d-flex justify-center align-center h-100">
    <RouterLink :to="{ name: ROUTE_NAMES.products }">
      <v-btn color="primary">На страницу продукты</v-btn>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
