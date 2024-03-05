import React from "react";

interface UnderlineProps {
  children: string;
}

export default function Underline({ children }: UnderlineProps) {
  return (
    <div className=" relative pt-24">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-white relative pb-3 pl-5 ">
        {children}
      </h1>
      <div className="absolute inset-x-20 bottom-0 -left-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 bottom-0 -left-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 bottom-0 -left-10 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 bottom-0 -left-10 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  );
}
