export async function GET() {
  const response = await fetch('http://localhost:8080/calibers', { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}

export async function POST() {
  const response = await fetch('https://localhost:8080/calibers', { method: 'POST' });
  const data = await response.json();
  return Response.json({ data });
}

export async function DELETE() {
  const response = await fetch();
}