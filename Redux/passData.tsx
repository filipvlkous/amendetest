import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function passData() {
  const token = useSelector((state: RootState) => state.bookReducer);

  return <div>passData</div>;
}
