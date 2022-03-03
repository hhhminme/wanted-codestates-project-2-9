import { configureStore } from "@reduxjs/toolkit";
import { reviews } from "./reviews";

export const store = configureStore({
  reducer: {
    reviews: reviews.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
