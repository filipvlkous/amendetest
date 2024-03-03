"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Query({ data }: { data: any }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("id");

  let bookData;

  console.log(data);
  useEffect(() => {
    bookData = data.find((item: any) => item.id == query);
  }, [query]);
  console.log(bookData);

  return <div>query</div>;
}
