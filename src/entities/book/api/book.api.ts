import api from '@/shared/api'
import type { AxiosResponse } from 'axios'
import type { IBook } from '@/entities/book'

const URL = 'books/'

/**
 * Получает список книг
 */
export async function getBooksApi(): Promise<AxiosResponse<IBook[]>> {
  return await api.get(URL)
}
