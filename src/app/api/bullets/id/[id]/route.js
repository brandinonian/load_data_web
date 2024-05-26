export async function GET(request, { params }) {
  const id = params.id; // localhost:3000/bullets/id/{id}
  const response = await fetch(`http://localhost:8080/bullets/id/${id}`, { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}