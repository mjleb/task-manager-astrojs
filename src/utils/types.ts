export type TTask = {
  id: string; // Уникальный идентификатор задачи
  userId: string; // ID пользователя, которому принадлежит задача
  title: string; // Название задачи
  description?: string | null; // Описание задачи (опционально)
  priority: 'low' | 'medium' | 'high'; // Приоритет задачи
  dueDate?: Date | null; // Дата выполнения (опционально)
  status: 'new' | 'in-progress' | 'completed'; // Статус задачи
  createdAt: Date; // Дата создания задачи
  updatedAt: Date; // Дата последнего обновления задачи
};
