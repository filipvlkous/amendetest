import React from "react";

export default function MainBody({ data }: any) {
  return (
    <>
      <h1 className="md:text-2xl text-6xl lg:text-3xl font-bold text-white relative pt-24 pl-5 ">
        {data.data.name}
      </h1>
      <p className=" text-white">{data.data.name}</p>
    </>
  );
}
