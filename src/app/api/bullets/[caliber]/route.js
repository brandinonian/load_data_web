export async function GET(request, { params }) {
  const cal = params.caliber; // localhost:3000/bullets/{cal}
  const response = await fetch(`http://localhost:8080/bullets/${cal}`, { method: 'GET' });
  const data = await response.json();
  return Response.json({ data });
}