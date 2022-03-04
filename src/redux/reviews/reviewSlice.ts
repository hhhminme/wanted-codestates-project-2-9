import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { v4 } from "uuid";

import { CommentType, CommentPayload, Review } from "./types";

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: [] as Review[],
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
  },
});

export const { addReview, addComment } = reviewSlice.actions;
export default reviewSlice.reducer;
