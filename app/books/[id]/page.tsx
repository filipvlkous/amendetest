import MainBody from "@/app/components/updateBook/MainBody";
import { ItemType } from "@/app/components/dataType";
const apiCallSingle = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/admin/books/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export default async function Page({ params }: any) {
  const jsonData = await apiCallSingle(params.id);
  const data: ItemType = await jsonData.json();
  return (
    <div className="mx-auto max-w-7xl pt-32 sm:px-6 lg:px-8 relative flex md:flex-row flex-col w-full justify-between gap-10 ">
      <MainBody data={data} />
    </div>
  );
}
