import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBook } from '@/entities/book/types/book.types'
import * as bookApi from '@/entities/book/api/book.api'
import { useTextNotificationStore } from '@/entities/textNotification'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref<IBook[]>([])

  // id избранных товаров
  const likes = ref<number[]>([])

  /**
   * Получает список книг
   */
  async function getBooks() {
    try {
      const response = await bookApi.getBooksApi()
      if (response && response.status === 200) {
        books.value = [...response.data]
      }
    } catch (error) {
      // Обработка ошибки
      const notificationStore = useTextNotificationStore()
      notificationStore.onOpenError('Ошибка при загрузке каталога')
    }
  }

  /**
   * Добаляет новую книгу
   * @param book
   */
  function addBook(book: IBook) {
    books.value.push(book)
  }

  /**
   * Удаляет книгу
   * @param id
   */
  function removeBook(id: number) {
    books.value = books.value.filter((b) => b.number !== id)
    if (isLike(id)) {
      likes.value = likes.value.filter((l) => l !== id)
    }
  }

  /**
   * Получает книгу по id
   * @param id
   */
  function getBookById(id: number): IBook | undefined {
    return books.value.find((b) => b.number === id)
  }

  /**
   * Устанавливает Like
   * @param id
   */
  function addLike(id: number) {
    likes.value.push(id)
  }

  /**
   * Удаляет Like
   * @param id
   */
  function removeLike(id: number) {
    likes.value = likes.value.filter((l) => l !== id)
  }

  /**
   * Проверят находится ли товар в избранном
   * @param id
   */
  function isLike(id: number): boolean {
    return likes.value.includes(id)
  }

  /**
   * Устанавливает/Убирает Like
   * @param id
   */
  function changeLike(id: number) {
    isLike(id) ? removeLike(id) : addLike(id)
  }

  return { books, getBooks, getBookById, addBook, removeBook, changeLike, isLike }
})
