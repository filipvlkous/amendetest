import MainBody from "@/app/components/updateBook/MainBody";
import { ItemType } from "../../../components/dataType";
import FormUpdate from "@/app/components/updateBook/form";

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
    <div className="mx-auto max-w-7xl pt-32 sm:px-6 lg:px-8 relative w-full justify-between ">
      <MainBody data={data} />
      <FormUpdate data={data} />
    </div>
  );
}
