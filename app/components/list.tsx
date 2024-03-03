import Link from "next/link";
import React from "react";
import { ListItem } from "./lisstItem";

export default function List({ data }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 justify-center items-center content-center ">
      {data?.map((item: any, key: number) => {
        return (
          <Link
            className=" cursor-pointer"
            key={key}
            href={{
              pathname: `admin/books/${item.name}`,
              query: { id: item.id },
            }}
          >
            <ListItem
              name={item.name}
              image={item.images.md}
              text={item.connections.relatives}
            />
          </Link>
        );
      })}
    </div>
  );
}