import { createSlice } from "@reduxjs/toolkit";
import { MOCK_DATA } from "./MOCK_DATA";
import { ReviewState } from "./types";

export const reviews = createSlice({
  name: "reviews",
  initialState: {
    data: MOCK_DATA,
  } as ReviewState,
  reducers: {},
});
