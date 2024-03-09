export async function GET() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  return Response.json(data);
}
