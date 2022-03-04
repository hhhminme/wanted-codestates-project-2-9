import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "src/assets/data";

import { v4 } from "uuid";

import { CommentType, CommentPayload, Review } from "./types";

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: data as Review[],
  reducers: {
    addReview: (state: Review[], action: PayloadAction<Review>) => {
      state.push(action.payload);
    },
    addComment: (state: Review[], action: PayloadAction<CommentPayload>) => {
      const { id, comment } = action.payload;
      const newComment: CommentType = {
        commentId: v4(),
        comment: comment,
      };
      const targetReview = state.filter((item) => item.id === id);
      targetReview[0].comments.unshift(newComment);
    },
    updateLikeCnt: {
      prepare: (id: string, isIncrease: boolean) => ({
        payload: { id, isIncrease },
      }),
      reducer: (
        state: Review[],
        { payload: { id, isIncrease } }: PayloadAction<{ id: string; isIncrease: boolean }>,
      ) => {
        const review = state.find((review) => review.id === id);
        if (!review) return;

        const newLikeCnt = isIncrease ? review.likeCnt + 1 : review.likeCnt - 1;
        review.likeCnt = newLikeCnt;
      },
    },
  },
});

export const { addReview, addComment, updateLikeCnt } = reviewSlice.actions;
export default reviewSlice.reducer;
