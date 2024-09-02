<script setup lang="ts">
import TemplateTextNotification from './TemplateTextNotification.vue'

interface Props {
  message: string
}

defineProps<Props>()
</script>

<template>
  <TemplateTextNotification>
    <template #content>
      {{ message }}
    </template>
  </TemplateTextNotification>
</template>

<style scoped lang="scss"></style>
