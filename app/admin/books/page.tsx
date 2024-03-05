import Underline from "@/app/components/underline";
import { getData } from "../../components/api";
import List from "@/app/components/list";

export default async function AdminIndex() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline>Admin Book List</Underline>
      <List data={data} hrefPath={"admin/books/"} />
    </div>
  );
}
