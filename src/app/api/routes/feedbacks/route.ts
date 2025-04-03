import {dbConnect} from '@/app/api/database/config';

export function GET() {
  dbConnect();

  return Response.json('<h1>This is Next.js Feed back request</h1>');
}
