export async function GET(request, { params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/cases/${id}`, { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}

export async function POST() {
  const response = await fetch('https://localhost:8080/cases', { method: 'POST' });
  const data = await response.json();
  return Response.json({ data });
}