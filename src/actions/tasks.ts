import { AstroCookies } from 'astro';
//import { v4 as uuidv4 } from 'uuid';
import { defineAction } from 'astro:actions';
import { type ActionAPIContext } from 'astro:actions';
import { z } from 'zod';
import { type TaskInput, TaskUpdate } from '../utils/types';
import prisma from '../prisma';

interface Action {
  handler: (input: any, context: any) => Promise<any>;
}

const checkCookie = (cookies: AstroCookies): string | null => {
  // Чтение userId из cookies
  const userCookie = cookies.get('userId');
  const userId = userCookie ? userCookie.value : null;

  if (!userId) {
    throw new Error('Не удалось получить задачи, так как идентификатор пользователя не найден в куках.');
  }
  return userId;
};
// Определяем схему данных для валидации
const taskSchemaInput = z.object({
  title: z.string().min(1, 'Название задачи не может быть пустым'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().optional(),
});

const taskUpdateSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Название задачи не может быть пустым'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().optional(),
  status: z.enum(['active', 'completed']).default('active'),
});

export const getTasks = defineAction({
  handler: async (input: null, { cookies }: any) => {
    const userId = checkCookie(cookies);

    // Получение задач только для конкретного пользователя
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });

    return tasks;
  },
});

export const createTask = defineAction({
  accept: 'form',
  input: taskSchemaInput,
  handler: async (input, { cookies }: ActionAPIContext) => {
    const userId = checkCookie(cookies);
    // Создаем новую запись в базе данных
    const newTask = await prisma.task.create({
      data: {
        userId: userId,
        title: input.title,
        description: input.description || null, // Если описание не задано, устанавливаем null
        priority: input.priority,
        dueDate: input.dueDate ? new Date(input.dueDate) : null, // Преобразуем строку в дату, если передано
      },
    });
    console.log('createTask', newTask);
    return newTask;
  },
});

export const getTaskById = defineAction({
  input: z.object({
    id: z.string(),
  }),
  handler: async (input: { id: string }, { cookies }: { cookies: AstroCookies }) => {
    const userId = checkCookie(cookies);

    const task = await prisma.task.findUnique({
      where: { id: input.id },
    });
    return task;
  },
});

export const updateTaskById = defineAction({
  accept: 'form',
  input: taskUpdateSchema,
  handler: async (input: TaskUpdate, { cookies }: { cookies: AstroCookies }) => {
    const userId = checkCookie(cookies);

    const updatedTask = await prisma.task.update({
      where: { id: input.id },
      data: {
        title: input.title || undefined,
        description: input.description || undefined,
        priority: input.priority || undefined,
        status: input.status || undefined,
      },
    });

    return updatedTask;
  },
});

export const deleteTaskById = defineAction({
  input: z.object({
    id: z.string(),
  }),
  handler: async (input: { id: string }, { cookies }: { cookies: AstroCookies }) => {
    // Чтение userId из cookies
    const userCookie = cookies.get('userId');
    const userId = userCookie ? userCookie.value : null;

    if (!userId) {
      throw new Error('Не удалось создать задачу, так как идентификатор пользователя не найден в куках.');
    }

    const deletedTask = await prisma.task.delete({
      where: { id: input.id },
    });
    return { success: true, data: deletedTask };
  },
});
