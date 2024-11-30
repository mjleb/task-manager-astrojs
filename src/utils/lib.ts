// Функция для форматирования даты
export const formatDate = (date: Date | null | undefined) => (date ? new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(new Date(date)) : 'N/A');
