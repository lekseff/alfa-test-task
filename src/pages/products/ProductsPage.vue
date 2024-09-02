<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { ROUTE_NAMES } from '@/app/plugins/router/names'
import { BookFilter } from '@/features/books/bookFilter'
import { BookFilters, CardBook, CardLoader, type IBook, useBookStore } from '@/entities/book'

const router = useRouter()
const bookStore = useBookStore()

const { books } = storeToRefs(bookStore)

const loading = ref(false)

const booksList = computed((): IBook[] => {
  return filteredBooks()
})

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

/**
 * Редирект на страницу подробного описания
 * @param id
 */
async function onRedirectToProduct(id: number) {
  await router.push({ name: ROUTE_NAMES.product, params: { id } })
}

const activeFilter = ref()

/**
 * Фильтрует список
 */
function filteredBooks(): IBook[] {
  let filtered = [...bookStore.books]

  if (activeFilter.value === BookFilters.like) {
    filtered = [...likesFilter()]
  }
  return filtered
}

/**
 * Фильтрует по избранным
 */
function likesFilter() {
  return bookStore.books.filter((b) => bookStore.isLike(b.number))
}
</script>

<template>
  <main>
    <div class="d-flex justify-end mb-6">
      <RouterLink :to="{ name: ROUTE_NAMES.productCreate }">
        <v-btn variant="outlined" color="primary" prepend-icon="mdi-plus">Добавить</v-btn>
      </RouterLink>
    </div>

    <!-- filter -->
    <BookFilter v-model="activeFilter" class="mb-6" />

    <!-- loader -->
    <div v-if="loading" class="cards">
      <CardLoader v-for="i in 9" :key="i" />
    </div>

    <!-- content -->
    <section v-if="!loading && booksList.length" class="cards">
      <CardBook
        v-for="book in booksList"
        :key="book.number"
        :book
        @click="onRedirectToProduct(book.number)"
      />
    </section>
    <template v-else>
      <h1 class="text-h3 text-textPrimary text-center mb-8 mb-sm-10 opacity-90">Список пуст</h1>
    </template>
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
}
</style>
