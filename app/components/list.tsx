import Link from "next/link";
import React from "react";
import { ListItem } from "./listItem";
import { ItemType } from "./dataType";

export default function List({
  data,
  hrefPath,
}: {
  data: ItemType[];
  hrefPath: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 justify-center items-center content-center ">
      {data.map((item: ItemType, key: number) => {
        return (
          <Link
            className=" cursor-pointer"
            key={key}
            href={{
              pathname: hrefPath + item._id,
            }}
          >
            <ListItem
              _id={item._id}
              name={item.name}
              img={item.img}
              text={item.text}
              author={item.author}
            />
          </Link>
        );
      })}
    </div>
  );
}
