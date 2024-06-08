export async function GET(request, { params }) {
  const id = params.id;
  const response = await fetch('http://localhost:8080/primers', { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}