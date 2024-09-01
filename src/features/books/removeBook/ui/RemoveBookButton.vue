<script setup lang="ts">
import { ref } from 'vue'
import { useBookStore } from '@/entities/book'

interface Props {
  id: number
}

const bookStore = useBookStore()
const props = defineProps<Props>()

const dialog = ref()

function onRemove() {
 bookStore.removeBook(props.id)
}
</script>

<template>
  <v-btn variant="text" icon density="comfortable" @click.stop>
    <v-icon icon="mdi-trash-can-outline" class="opacity-60" />
    <!-- Подтверждение удаления -->
    <v-dialog v-model="dialog" activator="parent" max-width="280">
      <v-card rounded="lg" color="background">
        <v-sheet color="secondary" class="text-center pa-2">Удалить книгу?</v-sheet>
        <v-card-actions class="d-flex align-center justify-space-evenly">
          <v-btn color="error" variant="text" @click="dialog = false">Нет</v-btn>
          <v-btn color="primary" variant="text" @click="onRemove">Да</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<style scoped lang="scss"></style>
