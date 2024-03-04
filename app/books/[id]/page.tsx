const apiCall = async (id: string) => {
  const username = process.env.BASIC_AUTH_NAME;
  const password = process.env.BASIC_AUTH_PASS;
  const basicAuthCredentials = btoa(`${username}:${password}`);
  const resp = await fetch(`http://localhost:3000/api/admin/books/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${basicAuthCredentials}`,
    },
  });

  return await resp.json();
};
export default async function Page({ params }: any) {
  //  const id = searchParams.get("id");
  const id = "65e5ab0b1d380403e8714498";

  const data = await apiCall(id);
  console.log(data);
  return (
    <div className=" text-white">
      <p>{data.data.name}</p>
      <p>t</p>
    </div>
  );
}
