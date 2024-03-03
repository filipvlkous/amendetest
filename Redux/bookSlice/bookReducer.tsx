"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  books: any;
}

const initialState: IAuthState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookState: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
    },
  },
});

export const { setBookState } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
