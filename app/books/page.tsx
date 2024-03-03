import List from "@/app/components/list";
import React from "react";

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
export default async function page() {
  const data = await getData();

  return (
    <div>
      page
      <List data={data} />
    </div>
  );
}
