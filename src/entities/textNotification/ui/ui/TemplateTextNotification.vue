<script setup lang="ts"></script>

<template>
  <v-sheet max-height="140" class="d-flex overflow-auto overflow-x-hidden text-notification-message">
    <div class="d-flex flex-column justify-center mr-2">
      <slot name="icon"></slot>
    </div>
    <div class="text-body-1 text-textDark h-100 text-notification-content" >
      <slot name="content"></slot>
    </div>
  </v-sheet>
</template>

<style lang="scss">
.text-notification {
  box-shadow:
    0 16px 16px 0 rgba(0, 0, 0, 0.16),
    0 0 8px 0 rgba(0, 0, 0, 0.12) !important;

  .v-snackbar__content {
    padding: 16px;
    max-width: 100%;
  }

  .v-snackbar__actions {
    padding-top: 12px;
    align-self: start;
  }

  &-message::-webkit-scrollbar {
    width: 3px;
    background: transparent;
  }

  &-message::-webkit-scrollbar-thumb {
    background-color: rgba(var(--v-theme-secondary));
    border-radius: 2px;
  }

  &-content {
    max-width: 100%;
  }
}
</style>
