<script setup lang="ts">
interface Props {
  photo: string
}

defineProps<Props>()
</script>

<template>
  <v-img :src="photo" max-width="300" class="border rounded-lg elevation-2" />
</template>

<style scoped lang="scss"></style>
