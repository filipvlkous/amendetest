import React from "react";
import { twMerge } from "tailwind-merge";

interface UnderlineProps {
  children: string;
  css?: string;
}

export default function Underline({ children, css }: UnderlineProps) {
  return (
    <div className={twMerge(" relative pt-0", css)}>
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
