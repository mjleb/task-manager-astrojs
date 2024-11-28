import type { APIRoute } from 'astro';

console.log('API tasks pages/api/ start');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/*
export async function POST({ request }: { request: Request }) {
  try {
    const rawBody = await request.text(); // Получаем текстовое тело
    console.log('Raw request body:', rawBody); // Логируем тело запроса

    if (!rawBody) {
      return new Response(JSON.stringify({ error: 'No content in request body' }), { status: 400 });
    }

    const data = JSON.parse(rawBody); // Пытаемся распарсить JSON
    console.log('Parsed JSON:', data); // Логируем распарсенные данные

    // Дальше бизнес-логика (например, создание задачи)
    const newTask = await createTask(data);
    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new Response(JSON.stringify({ error: 'Invalid JSON input' }), { status: 400 });
  }
}

export async function GET() {
  try {
    // Получаем все задачи с помощью getTasks
    const tasks = await getTasks();
    console.log('Retrieved tasks:', tasks); // Логируем полученные задачи

    // Возвращаем список задач
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return new Response(JSON.stringify({ error: 'Error fetching tasks' }), { status: 500 });
  }
}

export async function PUT({ request }: { request: Request }) {
  try {
    const { id, ...data } = await request.json();
    if (!id || !data) {
      return new Response(JSON.stringify({ error: 'Invalid or missing data' }), { status: 400 });
    }

    const updatedTask = await updateTask(Number(id), data);
    return new Response(JSON.stringify(updatedTask), { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return new Response(JSON.stringify({ error: 'Invalid JSON input' }), { status: 400 });
  }
}
*/

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;
  console.log('DELETE start', id);

  try {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });
    return new Response(JSON.stringify({ success: true, data: deletedTask }), { status: 200 });
  } catch (error) {
    console.error('Ошибка при удалении задачи:', error);
    return new Response('Ошибка при удалении задачи', { status: 500 });
  }
};
