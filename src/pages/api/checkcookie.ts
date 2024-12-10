// src/pages/api/checkCookie.ts
import type { APIRoute } from 'astro';
import { v4 as uuidv4 } from 'uuid';

export const GET: APIRoute = ({ request }) => {
  const cookies = request.headers.get('cookie');
  let userId;
  // Проверяем, есть ли userId в cookies
  if (cookies && cookies.includes('userId=')) {
    // Извлекаем существующий userId
    const match = cookies.match(/userId=([^;]+)/);
    userId = match ? match[1] : undefined;
  }

  if (!userId) {
    // Если userId нет, создаем новый
    userId = uuidv4();
    return new Response('New userId created', {
      status: 200,
      headers: {
        'Set-Cookie': `userId=${userId};  Path=/; Secure; Max-Age=31536000; SameSite=Strict`, // Max-Age = 1 год
      },
    });
  }

  return new Response(`Existing userId: ${userId}`, { status: 200 });
};
