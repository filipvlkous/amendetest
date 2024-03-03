"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBookState } from "./bookSlice/bookReducer";

export default async function DataPass({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) {
  const dispatch = useDispatch();

  const changeData = async () => {
    dispatch(setBookState(await data));
  };
  useEffect(() => {
    changeData();
  }, [data]);

  return <>{children}</>;
}
