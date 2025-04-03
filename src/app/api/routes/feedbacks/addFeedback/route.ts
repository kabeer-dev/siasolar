import {dbConnect} from '@/app/api/database/config';

export async function POST(request) {
  dbConnect();

  const data = await request.json();

  return Response.json('<h1>This is Next.js Feed back request</h1>');
}
