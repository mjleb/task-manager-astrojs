import { getTasks, createTask, getTaskById, updateTaskById } from './tasks';

export const server = {
  getTasks: getTasks,
  createTask: createTask,
  getTaskById: getTaskById,
  updateTaskById: updateTaskById,
};
