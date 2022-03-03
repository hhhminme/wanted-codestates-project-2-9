import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MOCK_DATA } from "./MOCK_DATA";
import { ReviewState } from "./types";

export const reviews = createSlice({
  name: "reviews",
  initialState: {
    data: MOCK_DATA,
  } as ReviewState,
  reducers: {
    updateLikeCnt: {
      prepare: (id: string, isIncrease: boolean) => ({
        payload: { id, isIncrease },
      }),
      reducer: (
        state: ReviewState,
        { payload: { id, isIncrease } }: PayloadAction<{ id: string; isIncrease: boolean }>,
      ) => {
        const review = state.data.find((review) => review.id === id);
        if (!review) return;

        const newLikeCnt = isIncrease ? review.likeCnt + 1 : review.likeCnt - 1;
        review.likeCnt = newLikeCnt;
      },
    },
  },
});
