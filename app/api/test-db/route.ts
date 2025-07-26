// app/api/test-db/route.ts
import connectToDB from '../../../lib/Mongodb';

export async function GET(req: Request) {
  try {
    await connectToDB();
    return new Response(JSON.stringify({ message: 'Connected to DB successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to connect to DB' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}