<script setup lang="ts">
import TextNotification from '@/entities/textNotification'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <RouterView />

        <!-- Уведомления -->
        <TextNotification />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
