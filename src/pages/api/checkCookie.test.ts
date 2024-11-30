import { GET } from './checkcookie';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid'); // Мокаем uuid для предсказуемости

describe('GET /api/checkCookie', () => {
  const createMockAPIContext = (request: Request): any => ({
    request,
    url: new URL(request.url),
    params: {},
    site: 'http://localhost',
    generator: 'jest',
  });

  it('should create a new userId if no cookies are provided', async () => {
    const mockUuid = '123e4567-e89b-12d3-a456-426614174000';
    (uuidv4 as jest.Mock).mockReturnValue(mockUuid);

    // Создаем mock-запрос без cookies
    const request = new Request('http://localhost/api/checkCookie');

    // Создаем mock APIContext
    const context = createMockAPIContext(request);

    // Вызываем функцию API Route
    const response = await GET(context);

    // Проверяем статус ответа
    expect(response.status).toBe(200);

    // Проверяем заголовок Set-Cookie
    const setCookie = response.headers.get('Set-Cookie');
    expect(setCookie).toContain(`userId=${mockUuid}`);
    expect(setCookie).toContain('Path=/');
    expect(setCookie).toContain('Secure');
    expect(setCookie).toContain('Max-Age=31536000');
    expect(setCookie).toContain('SameSite=Strict');

    // Проверяем текст ответа
    const text = await response.text();
    expect(text).toBe('New userId created');
  });

  it('should return existing userId if cookies are provided', async () => {
    const existingUserId = 'existing-user-id';

    // Создаем mock-запрос с существующими cookies
    const request = new Request('http://localhost/api/checkCookie', {
      headers: {
        cookie: `userId=${existingUserId}`,
      },
    });

    // Создаем mock APIContext
    const context = createMockAPIContext(request);

    // Вызываем функцию API Route
    const response = await GET(context);

    // Проверяем статус ответа
    expect(response.status).toBe(200);

    // Проверяем, что заголовок Set-Cookie отсутствует
    const setCookie = response.headers.get('Set-Cookie');
    expect(setCookie).toBeNull();

    // Проверяем текст ответа
    const text = await response.text();
    expect(text).toBe(`Existing userId: ${existingUserId}`);
  });
});
