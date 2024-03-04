import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { getData } from "../../components/api";
import List from "@/app/components/list";

export default async function AdminIndex() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <h1 className="md:text-2xl text-6xl lg:text-3xl font-bold text-white relative pt-24 pl-5 ">
        Admin Book list
      </h1>
      <List data={data} hrefPath={"admin/books/"} />
    </div>
  );
}
