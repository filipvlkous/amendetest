import Underline from "@/app/components/underline";
import List from "@/app/components/list";
import { ItemType } from "@/app/components/dataType";

const apiCallSingle = async () => {
  const response = await fetch(`http://localhost:3000/api`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export default async function Page() {
  const jsonData = await apiCallSingle();
  const data: ItemType[] = await jsonData.json();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline css="pt-24">Admin Book List</Underline>
      <List data={data} hrefPath={"/admin/books/"} />
    </div>
  );
}
