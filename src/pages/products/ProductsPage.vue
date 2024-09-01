<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { CardBook, useBookStore } from '@/entities/book'
import { ROUTE_NAMES } from '@/app/plugins/router/names'

const router = useRouter()
const bookStore = useBookStore()

const loading = ref(false)
const { books } = storeToRefs(bookStore)

onMounted(async () => {
  if (!books.value.length) {
    await getProducts()
  }
})

/**
 * Получает список товаров
 */
async function getProducts() {
  try {
    loading.value = true
    await bookStore.getBooks()
  } finally {
    loading.value = false
  }
}

async function showFull(id: number) {
  await router.push({ name: ROUTE_NAMES.product, params: { id } })
}
</script>

<template>
  <main>
    <section class="cards">
      <!-- loader -->
      <template v-if="loading">
        <v-skeleton-loader
          v-for="i in 9"
          :key="i"
          type="image, paragraph"
          class="cards__loader align-start border rounded-lg"
        />
      </template>
      <!-- content -->
      <template v-else>
        <CardBook v-for="book in books" :key="book.number" :book @click="showFull(book.number)" />
      </template>
    </section>
  </main>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: center;
  max-width: 960px;
  gap: 1.5rem;
  margin: 0 auto;
  padding-inline: 1rem;

  &__loader {
    :deep(.v-skeleton-loader__image) {
      height: 200px;
      border-radius: 6px 6px 0 0;
    }
  }
}
</style>
