<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { computed, onMounted, ref } from 'vue'
import { BackButton } from '@/features/backButton'
import { type IBook, useBookStore } from '@/entities/book'
import noPhotoImg from '@/shared/assets/images/no-image.png'

const route = useRoute()
const { xs } = useDisplay()
const bookStore = useBookStore()

const book = ref<IBook>()
const loading = ref(false)
const isErrorPhoto = ref(false)

// Фото карточки
const photo = computed(() => {
  if (isErrorPhoto.value || !book.value?.cover) {
    return noPhotoImg
  } else {
    return book.value.cover
  }
})

onMounted(async () => {
  if (!bookStore.books.length) {
    await getAllBooks()
  }

  const id = route.params.id
  if (id && !Number.isNaN(+id)) {
    getBookById(+id)
  }
})

/**
 * Получает полный список книг
 */
async function getAllBooks() {
  try {
    loading.value = true
    await bookStore.getBooks()
  } finally {
    loading.value = false
  }
}

/**
 * Получает полную информацию о книге по id
 * @param id
 */
function getBookById(id: number): void {
  const result = bookStore.getBookById(id)
  if (result) {
    book.value = { ...result }
  }
}

/**
 * Обрабатывает ошибку загрузки фото
 */
function onError() {
  isErrorPhoto.value = true
}
</script>

<template>
  <!-- loader -->
  <div v-if="loading" class="d-flex align-center justify-center h-100">
    <v-progress-circular color="primary" indeterminate />
  </div>

  <!-- content -->
  <template v-else>
    <BackButton class="mb-6" />

    <section v-if="book" class="d-flex flex-column flex-sm-row ga-sm-8">
      <v-sheet class="mb-6 mb-sm-0 w-100 photo">
        <v-img
          :src="photo"
          :min-width="xs ? '' : '300'"
          :alt="book.title"
          @error="onError"
          class="rounded-lg elevation-3"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate />
            </div>
          </template>
        </v-img>
      </v-sheet>

      <v-sheet class="d-flex flex-column ga-4 text-textPrimary flex-shrink-1">
        <h1 class="text-h5 font-weight-semibold">{{ book.title }}</h1>

        <div>
          <span class="d-inline-block text-body-1 font-weight-semibold mr-2"> Release date: </span>
          <span class="text-body-1 font-weight">{{ book.releaseDate }}</span>
        </div>

        <div>
          <span class="d-inline-block text-body-1 font-weight-semibold mr-2">Pages:</span>
          <span class="text-body-1 font-weight">{{ book.pages }}</span>
        </div>

        <div>
          <span class="d-inline-block text-body-1 font-weight-semibold mr-2">Description:</span>
          <span class="text-body-1 font-weight">{{ book.description }}</span>
        </div>
      </v-sheet>
    </section>
    <h1 v-else class="text-h3 text-center mt-6 mt-sm-8">Товар не найден</h1>
  </template>
</template>

<style scoped lang="scss">
.photo {
  @media (min-width: 601px) {
    max-width: 320px;
  }

  img {
    box-shadow: 2px 2px 6px 2px rgba(34, 60, 80, 0.2);
  }
}
</style>
