import { getTasks, createTask, getTaskById } from './tasks';

export const server = {
  getTasks: getTasks,
  createTask: createTask,
  getTaskById: getTaskById,
};
