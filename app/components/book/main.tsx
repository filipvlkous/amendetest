import React from "react";
import Underline from "../underline";
import Image from "next/image";
import Gandalf from "../../../public/gandalf.png";
export default function MainBody({ data }: any) {
  return (
    <>
      <Image src={Gandalf} alt={""} />
      <div className="w-1/2 gap-10">
        <Underline css="md:pt-24">Name</Underline>
        <p className="text-2xl pl-5 pt-5 text-white font-bold">Author</p>
        <p className="text-lg pl-5 text-white font-semibold">text</p>
      </div>
    </>
  );
}
