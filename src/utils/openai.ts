import { OpenAI } from 'openai';
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function generateTaskDescription(title) {
  try {
    const response = await client.chat.completions.create({
      model: process.env['OPENAI_API_MODEL'], // Убедитесь, что название модели корректно
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `Generate a task description limited to 300 characters for the following title: "${title}"`,
        },
      ],
    });

    // Проверяем, что ответ содержит необходимое содержимое
    if (!response || !response.choices || response.choices.length === 0 || !response.choices[0].message || !response.choices[0].message.content) {
      throw new Error('Получен пустой ответ от API');
    }

    return response.choices[0].message.content.trim();
  } catch (error) {
    // Логируем ошибку для отладки
    console.error('Ошибка при генерации описания задачи:', error);

    // Бросаем ошибку дальше, чтобы вызывающий код мог её обработать
    throw new Error(`Не удалось сгенерировать описание задачи: ${error.message}`);
  }
}
