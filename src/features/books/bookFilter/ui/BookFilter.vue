<script setup lang="ts">
import { BookFilters } from '@/entities/book'

const activeFilter = defineModel({ default: BookFilters.all })
</script>

<template>
  <v-tabs v-model="activeFilter" align-tabs="center" color="primary">
    <v-tab :value="BookFilters.all">Все</v-tab>
    <v-tab :value="BookFilters.like">Избранное</v-tab>
  </v-tabs>
</template>

<style scoped lang="scss"></style>
