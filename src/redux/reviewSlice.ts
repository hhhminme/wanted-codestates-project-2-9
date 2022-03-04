import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { Review } from "../assets/data";
// import data from "../assets/data";
// type Opaque<T, K extends string> = T & { __typename: K };
// type Base64 = Opaque<string, "base64">;

export type Review = {
  id: string;
  productNm: string;
  productImg: string[];
  likeCnt: number;
  createDt: number;
  review: string;
  reviewRate: number;
  comments: {
    commentId?: string;
    content?: string;
  }[];
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: [] as Review[],
  reducers: {
    add: (state: Review[], action: PayloadAction<Review>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = reviewSlice.actions;
export default reviewSlice.reducer;
