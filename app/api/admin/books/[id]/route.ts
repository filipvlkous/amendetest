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
      `https://crudcrud.com/api/7c01e6b4f7f04ae39bb0304b6adb621a/books/${id}`,
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