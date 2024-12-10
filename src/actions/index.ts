import { generateTaskDescription } from '../utils/openai';
import { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById } from './tasks';

export const server = {
  getTasks: getTasks,
  createTask: createTask,
  getTaskById: getTaskById,
  updateTaskById: updateTaskById,
  deleteTaskById: deleteTaskById,
  generateDescription: generateTaskDescription,
};
