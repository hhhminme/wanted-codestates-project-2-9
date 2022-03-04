import { configureStore } from "@reduxjs/toolkit";

import reviewReducer from "./reviews/reviewSlice";

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
