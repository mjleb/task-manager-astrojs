import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
//import { v4 as uuidv4 } from 'uuid';
import { defineAction } from 'astro:actions';
import type { TTask } from '../utils/types';

const prisma = new PrismaClient();

// Определяем схему данных для валидации
const taskSchema = z.object({
  userId: z.string(),
  title: z.string().min(1, 'Название задачи не может быть пустым'),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().optional(), // Строка, которая позже преобразуется в дату
  status: z.enum(['new', 'in-progress', 'completed']).default('new'),
});

export const getTasks = defineAction({
  handler: async () => {
    const post = await prisma.task.findMany();
    return post;
  },
});

export const createTask = defineAction({
  accept: 'form',
  input: taskSchema,
  handler: async (input) => {
    // Создаем новую запись в базе данных
    const newTask = await prisma.task.create({
      data: {
        userId: input.userId,
        title: input.title,
        description: input.description || null, // Если описание не задано, устанавливаем null
        priority: input.priority,
        dueDate: input.dueDate ? new Date(input.dueDate) : null, // Преобразуем строку в дату, если передано
        status: input.status,
      },
    });

    return newTask;
  },
});

export const getTaskById = defineAction({
  input: z.object({
    id: z.string(),
  }),
  handler: async (input) => {
    const task = await prisma.task.findUnique({
      where: { id: input.id },
    });
    return task;
  },
});
