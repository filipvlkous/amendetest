import MainBody from "@/app/components/book/main";

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
  console.log(data);
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative ">
      <MainBody data={data} />
      {/* <AdminBody/> */}
    </div>
  );
}
