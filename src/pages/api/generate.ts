import { generateTaskDescription } from '../../utils/openai';

export async function POST({ request }: { request: Request }) {
  try {
    const { title } = await request.json();
    if (!title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400 });
    }
    const description = await generateTaskDescription(title);
    return new Response(JSON.stringify({ description }), { status: 200 });
  } catch (error) {
    console.error('Error in /api/generate:', error);
    return new Response(JSON.stringify({ error: `Failed to generate description ${error.message}` }), { status: 500 });
  }
}
