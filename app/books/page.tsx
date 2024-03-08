import List from "@/app/components/list";
import React from "react";
import { getData } from "../components/api";
import Underline from "../components/underline";

export default async function page() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline css="pt-24"> User Book list</Underline>
      <List data={data} hrefPath={"/books/"} />
    </div>
  );
}
