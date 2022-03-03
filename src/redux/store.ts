import { configureStore } from "@reduxjs/toolkit";
import { reviewSlice } from "./reviewSlice";

export const store = configureStore({
  reducer: {
    reviewSlice: reviewSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
