import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MOCK_DATA } from "./MOCK_DATA";
import { ReviewState } from "./types";
import { Payload } from "./types";
import { v4 } from "uuid";

export const reviews = createSlice({
  name: "reviews",
  initialState: {
    data: MOCK_DATA,
  } as ReviewState,
  reducers: {
    addComment(state: ReviewState, action: PayloadAction<Payload>) {
      const { id, comment } = action.payload;
      const newComment = {
        commentId: v4(),
        comment: comment,
      };
      const targetReview = state.data.filter((item) => item.id === id);
      const comments = targetReview[0].comments;
      comments.unshift(newComment);
    },
  },
});

export const { addComment } = reviews.actions;
