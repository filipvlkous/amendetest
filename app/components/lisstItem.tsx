import React from "react";
import { PinContainer } from "./ui/card";
import Image from "next/image";
type ItemType = {
  name: String;
  image: String;
  text: String;
};

export function ListItem(item: ItemType) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title={item.name as string}
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
            {item.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {item.text.substring(0, 50)}
            </span>
          </div>
          <Image
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            src={item.image as string}
            alt={item.name as string}
            width={100}
            height={100}
          />
        </div>
      </PinContainer>
    </div>
  );
}
