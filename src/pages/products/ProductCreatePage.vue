<script setup lang="ts">
import { computed, ref } from 'vue'
import FieldFile from '@/shared/ui/FieldFile.vue'
import FieldText from '@/shared/ui/FieldText.vue'
import FieldTextarea from '@/shared/ui/FieldTextarea.vue'
import { BackButton } from '@/features/backButton'
import { rules } from '@/shared/helpers/validationRules'
import { useTextNotificationStore } from '@/entities/textNotification'
import { type IBook, type IBookForm, PrevPhoto, useBookStore } from '@/entities/book'

const bookStore = useBookStore()
const notificationStore = useTextNotificationStore()

const productForm = ref<HTMLFormElement | null>(null)

const formData = ref<IBookForm>({
  title: '',
  pages: '',
  releaseDate: '',
  photo: null,
  description: '',
})

// Фото предпросмотра
const prevImage = computed((): string | null => {
  if (formData.value.photo) {
    return URL.createObjectURL(formData.value.photo)
  }
  return null
})

/**
 * Добавляет новую книгу
 */
async function onSubmit() {
  if (!productForm.value) return

  const { valid } = await productForm.value.validate()
  if (!valid || !formData.value.photo) return

  const body: IBook = {
    number: Date.now(),
    title: formData.value.title,
    originalTitle: formData.value.title,
    releaseDate: new Date(formData.value.releaseDate).toDateString(),
    description: formData.value.description,
    pages: Number(formData.value.pages),
    cover: URL.createObjectURL(formData.value.photo),
    index: Date.now(),
  }

  bookStore.addBook(body)
  productForm.value.reset()
  await productForm.value.resetValidation()
  notificationStore.onOpenSuccess('Книга добавлена')
}
</script>

<template>
  <BackButton class="mb-6" />

  <div class="form-wrapper">
    <h1 class="text-h4 text-textPrimary font-weight-semibold mb-6">Новая книга</h1>

    <v-form
      ref="productForm"
      class="d-flex flex-column ga-2"
      @submit.prevent
      @keydown.enter="onSubmit"
    >
      <FieldText
        v-model="formData.title"
        label="Название"
        :rules="[rules.required, rules.maxLength(250)]"
      />

      <FieldText
        v-model="formData.releaseDate"
        label="Дата выхода"
        type="date"
        class="date-field"
        :rules="[rules.required]"
      />

      <FieldText
        v-model="formData.pages"
        label="Количество страниц"
        :rules="[rules.required, rules.maxLength(4)]"
      />

      <FieldTextarea
        v-model="formData.description"
        label="Описание"
        placeholder="Краткое описание"
        :rules="[rules.required, rules.maxLength(250)]"
      />

      <FieldFile
        v-model="formData.photo"
        label="Фото"
        :rules="[rules.requiredFile, rules.isImage, rules.maxFileSize_2_5Mb]"
      />
    </v-form>

    <div class="d-flex justify-end mt-3">
      <v-btn color="primary" @click="onSubmit">Добавить</v-btn>
    </div>

    <!-- Предпросмотр фото -->
    <PrevPhoto v-if="prevImage" :photo="prevImage" />
  </div>
</template>

<style scoped lang="scss">
.form-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding-inline: 16px;
}

.date-field {
  :deep(.v-field__field .v-field__input) {
    display: block;
  }
}
</style>
