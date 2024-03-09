import React from "react";
import Underline from "../underline";
import Image from "next/image";
import Gandalf from "../../../public/gandalf.png";
import { ItemType } from "../dataType";
export default async function MainBody({ data }: { data: ItemType }) {
  return (
    <div className=" flex gap-10 w-full justify-between ">
      <Image
        src={`data:image/png;base64,${data.img}`}
        alt={data.name}
        width={500}
        height={500}
      />
      <div className="w-1/2 gap-10">
        <Underline css="md:pt-24">{data.name}</Underline>
        <p className="text-2xl pl-5 pt-5 text-white font-bold">{data.author}</p>
        <p className="text-lg pl-5 text-white font-semibold">{data.text}</p>
      </div>
    </div>
  );
}
