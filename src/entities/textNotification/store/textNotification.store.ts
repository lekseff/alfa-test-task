import { defineStore } from 'pinia'
import { textNotificationTypes } from '../types/types'

interface State {
  show: boolean
  message: string
  type: textNotificationTypes | null
  showAction: boolean
}

export const useTextNotificationStore = defineStore('textNotification', {
  state: (): State => ({
    show: false,
    message: '',
    type: null,
    showAction: false, // Флаг кнопки закрыть
  }),
  actions: {
    /**
     * Успешное уведомление
     * @param message - текст сообщения
     * @param action - показывать кнопку закрыть или нет
     */
    onOpenSuccess(message: string, action: boolean = true) {
      this.show = false
      this.type = textNotificationTypes.success
      this.showAction = action
      this.message = message
      this.show = true
    },
    /**
     * Уведомление об ошибке
     * @param message - текст сообщения
     * @param action - показывать кнопку закрыть или нет
     */
    onOpenError(message: string, action: boolean = true) {
      this.show = false
      this.message = message || 'Повторите попытку или попробуйте позже'
      this.type = textNotificationTypes.error
      this.showAction = action
      this.show = true
    },
    /**
     * Закрывает уведомление
     */
    onClose() {
      this.show = false
      setTimeout(this.resetState, 300) // Для того чтобы не было скачков при закрытии уведомления
    },
    /**
     * Сброс состояния уведомления
     */
    resetState() {
      this.message = ''
      this.type = null
      this.showAction = false
    },
  },
})
