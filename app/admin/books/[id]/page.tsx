const apiCall = async (id: string) => {
  const resp = await fetch(`http://localhost:3000/api/admin/books/${id}`, {
    method: "GET",
  });

  return await resp.json();
};
export default async function Page({ params }: any) {
  //  const id = searchParams.get("id");
  const id = "65e5ab0b1d380403e8714498";

  const data = await apiCall(id);
  console.log("sds");
  console.log(data);
  return (
    <div>
      <p className=" text-white">{data.data.name}</p>
    </div>
  );
}
