<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IBook } from '@/entities/book'
import { BookRemoveButton } from '@/features/books/bookRemove'
import { ChangeLikeButton } from '@/features/books/changeLike'
import noPhotoImg from '@/shared/assets/images/no-image.png'

interface Props {
  book: IBook
}

const props = defineProps<Props>()
const isErrorPhoto = ref(false)

const photo = computed(() => {
  if (isErrorPhoto.value || !props.book.cover) {
    return noPhotoImg
  } else {
    return props.book.cover
  }
})

/**
 * Обрабатывает ошибку загрузки фото
 */
function onError() {
  isErrorPhoto.value = true
}
</script>

<template>
  <div class="product-card card">
    <div class="card__image py-3">
      <BookRemoveButton :id="book.number" class="card__remove-btn" />
      <ChangeLikeButton :id="book.number" class="card__like-btn" />

      <v-img :src="photo" :alt="book.title" @error="onError">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate />
          </div>
        </template>
      </v-img>
    </div>

    <div class="pa-4">
      <h2 class="text-body-1 font-weight-semibold text-textPrimary card__title">
        {{ book.title }}
      </h2>
      <div class="text-body-2 text-end opacity-80 mt-2">
        <span>Release date: </span>
        <span>{{ book.releaseDate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$card-border: #8080804d;

.card {
  //max-width: 280px;
  width: 100%;
  border: 1px solid $card-border;
  border-radius: 8px;
  cursor: pointer;
  transition: all 120ms ease-in;

  @media (hover: hover) {
    &:hover {
      scale: 1.02;
      box-shadow: 2px 2px 6px 2px rgba(34, 60, 80, 0.2);
      transition: all 150ms ease-in;
    }
  }

  &__image {
    position: relative;
    height: 200px;
    text-align: center;
    overflow: hidden;
    border-bottom: 1px solid $card-border;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__remove-btn {
    position: absolute;
    opacity: 0;
    top: 4px;
    left: 4px;
    z-index: 1;
  }

  &__like-btn {
    position: absolute;
    bottom: 4px;
    right: 6px;
    z-index: 1;
  }

  &:hover &__remove-btn {
    opacity: 100%;
    transition: opacity 120ms ease-in;
  }
}
</style>
