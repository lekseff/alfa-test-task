export interface IBook {
  number: number
  title: string
  originalTitle: string
  releaseDate: string
  description: string
  pages: number
  cover: string
  index: number
}

// Форма создания/редактирования
export interface IBookForm {
  title: string
  pages: string
  releaseDate: string
  photo: File | null
  description: string
}

// Тип фильтра
export enum BookFilters {
  all = 'all',
  like = 'like',
}
