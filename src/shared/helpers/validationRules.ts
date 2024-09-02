// Правила валидации для полей формы
export const rules = {
  required: (value: string): boolean | string => !!value || 'Заполните поле',
  requiredFile: (value: any[]) => value?.length > 0 || 'Необходимо выбрать файл',
  isImage: (value: File[]) =>
    !value || !value.length || !!value[0]?.type.match('image.*') || 'Файл не является изображением',
  maxFileSize_2_5Mb: (value: File[]) =>
    !value || !value.length || value[0].size < 2621440 || 'Размер файла не более 2.5 MB',
  maxLength(param: number) {
    return (value: string | number): boolean | string =>
      value?.toString().length <= param || `Не более ${param} символов`
  },
}
