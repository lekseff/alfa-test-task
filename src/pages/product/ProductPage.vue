<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { type IBook, useBookStore } from '@/entities/book'
import { ROUTE_NAMES } from '@/app/plugins/router/names'
import noPhotoImg from '@/shared/assets/images/no-image.png'
import { useDisplay } from 'vuetify'

const route = useRoute()
const { xs } = useDisplay()
const bookStore = useBookStore()

const book = ref<IBook>()
const isErrorPhoto = ref(false)

const photo = computed(() => {
  if (isErrorPhoto.value || !book.value?.cover) {
    return noPhotoImg
  } else {
    return book.value.cover
  }
})

onMounted(async () => {
  if (!bookStore.books.length) {
    await bookStore.getBooks()
  }

  const id = route.params.id
  if (id && !Number.isNaN(+id)) {
    getBook(+id)
  }
})

/**
 * Получает полную информацию о книге по id
 * @param id
 */
function getBook(id: number): void {
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
  <div class="d-flex justify-end mb-6">
    <RouterLink :to="{ name: ROUTE_NAMES.products }">
      <v-btn variant="outlined">На главную</v-btn>
    </RouterLink>
  </div>

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
