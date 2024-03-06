import Link from "next/link";
import React from "react";
import { ListItem } from "./listItem";

export default function List({ data, hrefPath }: any) {
  console.log(hrefPath);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 justify-center items-center content-center ">
      {data?.map((item: any, key: number) => {
        return (
          <Link
            className=" cursor-pointer"
            key={key}
            href={{
              pathname: hrefPath + item._id,
            }}
          >
            <ListItem
              name={item.name}
              image={item.img}
              text={item.text}
              author={item.author}
            />
          </Link>
        );
      })}
    </div>
  );
}
