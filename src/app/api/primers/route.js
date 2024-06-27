export async function GET() {
  const response = await fetch('http://localhost:8080/primers', { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}

export async function POST(request) {
  const response = await fetch('http://localhost:8080/primers', {
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: request.body,
    duplex: 'half',
  });
  const data = await response.json();
  return Response.json({ data });
}