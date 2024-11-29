export interface TTask {
  id: string; // Уникальный идентификатор задачи
  userId: string; // ID пользователя, которому принадлежит задача
  title: string; // Название задачи
  description?: string | null; // Описание задачи (опционально)
  priority: 'low' | 'medium' | 'high'; // Приоритет задачи
  dueDate?: string | Date | null; // Дата выполнения (опционально)
  status: 'active' | 'completed'; // Статус задачи
  createdAt: Date; // Дата создания задачи
  updatedAt: Date; // Дата последнего обновления задачи
}

export interface BaseTask {
  title: string;
  description?: string | null; // Описание может быть строкой или null, чтобы совместить с NewTask
  priority: 'low' | 'medium' | 'high';
}

export interface TaskInput extends BaseTask {
  dueDate?: string | Date | null; // Дата может приходить в виде строки, быть объектом Date или null
}

export interface TaskUpdate extends BaseTask {
  id: string;
  status: 'active' | 'completed'; // Статус задачи
}

export interface NewTask extends BaseTask {
  id: string;
  userId: string;
  description: string | null;
  dueDate: Date | null; // Для NewTask дата представлена объектом Date или null
  status: string; // статус задачи
  createdAt: Date; // дата создания
  updatedAt: Date; // дата последнего обновления
}
