export async function GET() {
  const response = await fetch('http://localhost:8080/powders', { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}

export async function POST() {
  const response = await fetch('https://localhost:8080/powders', { method: 'POST' });
  const data = await response.json();
  return Response.json({ data });
}