import List from "@/app/components/list";
import React from "react";
import { getData } from "../components/api";

export default async function page() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <h1 className="md:text-2xl text-6xl lg:text-3xl font-bold text-white relative pt-24 pl-5 ">
        User Book list
      </h1>

      <List data={data} hrefPath={"/books/"} />
    </div>
  );
}
