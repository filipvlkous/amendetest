import List from "@/app/components/list";
import React from "react";
import Underline from "../components/underline";
import { ItemType } from "../components/dataType";

const apiCallSingle = async () => {
  const response = await fetch(`http://localhost:3000/api`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
export default async function page() {
  const jsonData = await apiCallSingle();
  const data: ItemType[] = await jsonData.json();

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative  ">
      <Underline css="pt-24"> User Book list</Underline>
      <List data={data} hrefPath={"/books/"} />
    </div>
  );
}
