"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "./store";
import { setBookState } from "./bookSlice/bookReducer";
import data from "../testdata.json";
export default function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
