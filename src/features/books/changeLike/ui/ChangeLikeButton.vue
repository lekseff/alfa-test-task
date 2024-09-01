<script setup lang="ts">
import { computed } from 'vue'
import { useBookStore } from '@/entities/book'

interface Props {
  id: number
}

const bookStore = useBookStore()
const props = defineProps<Props>()

// Тип иконки
const isLikeIcon = computed((): string => {
  return bookStore.isLike(props.id) ? 'mdi-heart' : 'mdi-heart-outline'
})

function onChangeLike() {
  bookStore.changeLike(props.id)
}
</script>

<template>
  <v-btn variant="text" icon density="comfortable" @click.stop="onChangeLike">
    <v-icon :icon="isLikeIcon" class="opacity-60" />
  </v-btn>
</template>

<style scoped lang="scss"></style>
