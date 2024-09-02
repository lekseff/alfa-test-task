<script setup lang="ts">
import { computed } from 'vue'
import ErrorMessage from '@/entities/textNotification/ui/ui/ErrorMessage.vue'
import SuccessMessage from '@/entities/textNotification/ui/ui/SuccessMessage.vue'
import { useTextNotificationStore } from '@/entities/textNotification/store/textNotification.store'
import { textNotificationTypes } from '@/entities/textNotification'

const textNotificationStore = useTextNotificationStore()

const timeout = 6_000 // Время отображения уведомления

const model = computed({
  get() {
    return textNotificationStore.show
  },
  set() {
    closeNotification()
  },
})

// Тип уведомления
const body = computed(() => {
  return textNotificationStore.type === textNotificationTypes.success
    ? SuccessMessage
    : ErrorMessage
})

// Class для уведомления
const contentClass = computed(() => {
  return textNotificationStore.type === textNotificationTypes.success
    ? 'success-color'
    : 'error-color'
})

function closeNotification() {
  textNotificationStore.onClose()
}
</script>

<template>
  <v-snackbar
    v-model="model"
    rounded="lg"
    color="white"
    variant="flat"
    z-index="3000"
    max-width="430"
    max-height="280"
    :timeout="timeout"
    location="right top"
    class="mr-6 mb-4"
    :content-class="['text-notification', contentClass]"
  >
    <component :is="body" :message="textNotificationStore.message" />
    <template #actions v-if="textNotificationStore.showAction">
      <v-btn :icon="true" size="32" @click="closeNotification">
        <v-icon icon="mdi-close" class="opacity-50"></v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style lang="scss">
.success-color {
  border: 1px solid rgba(var(--v-theme-success), 0.3);
  border-left: 8px solid rgba(var(--v-theme-success));
}

.error-color {
  border: 1px solid rgba(var(--v-theme-error), 0.3);
  border-left: 8px solid rgba(var(--v-theme-error));
}

</style>
