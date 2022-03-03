import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MOCK_DATA } from "./data";
// type Opaque<T, K extends string> = T & { __typename: K };
// type Base64 = Opaque<string, "base64">;

interface Review {
  id: string;
  productNm: string;
  productImg: string;
  createDt: string;
  review: string;
  reviewRate: number;
  likeCnt: number;
  comments: Comment[];
}

type Comment = {
  commentId: string;
  content: string;
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: MOCK_DATA as Review[],
  reducers: {
    add: (state: Review[], action: PayloadAction<Review>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = reviewSlice.actions;
export default reviewSlice.reducer;
