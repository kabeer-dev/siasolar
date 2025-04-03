import {dbConnect} from './database/config';

export function GET() {
  dbConnect();

  return Response.json('<h1>This is Next.js server</h1>');
}
