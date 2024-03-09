export async function GET(req: Request, { params }: any) {

  const id = params.id;
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    return Response.json(data);
  } catch (error: any) {
    return Response.json(error.message);
  }
}
