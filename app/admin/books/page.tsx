import { PlusCircleIcon } from "@heroicons/react/24/solid";
import List from "@/app/components/list";

async function getData() {
  const url = "https://superhero-search.p.rapidapi.com/api/villains";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1c74f3df14msh726f94f4eb55b1fp1cdfabjsnd512d27323ed",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AdminIndex() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
      <button
        type="button"
        className=" group inline-flex items-center gap-3 absolute right-8 rounded-md bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-900 transition-all dura shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Přidat produkt
        <PlusCircleIcon className="h-8 w-8 text-green-500  group-hover:text-green-700 transition-all duration-200" />
      </button>

      <List data={data} />
    </div>
  );
}
