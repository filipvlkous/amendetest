export async function GET(req: Request, { params }: any) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return Response.json("Unauthorized");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = credentials.split(":");

  if (
    username !== process.env.BASIC_AUTH_NAME ||
    password !== process.env.BASIC_AUTH_PASS
  ) {
    return Response.json("Unauthorized");
  }

  const id = params.id;
  try {
    const res = await fetch(
      `https://crudcrud.com/api/f07e48e847fc42788a00bf67dbbf159b/books/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    return Response.json({ data });
  } catch (error: any) {
    return Response.json(error.message);
  }
}