<script setup lang="ts">
import { ROUTE_NAMES } from '@/app/plugins/router/names.js'
</script>

<template>
  <RouterLink :to="{name: ROUTE_NAMES.products}">
    <v-btn>Продукты</v-btn>
  </RouterLink>
</template>

<style scoped lang="scss"></style>
