import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type Opaque<T, K extends string> = T & { __typename: K };
type Base64 = Opaque<string, "base64">;

interface TypeReviews {
  reviews: [
    {
      id: string;
      productNm: string;
      productImg: Base64 | string;
      createDt: string;
      review: string;
      reviewRate: number;
      likeCnt: number;
      comments: [
        {
          commentId: string;
          content: string;
        },
      ];
    },
  ];
}

const initialState: TypeReviews = {
  reviews: [
    {
      id: "3731858a-9ab8-11ec-b909-0242ac120002",
      productNm: "블랙 핸드백",
      productImg: "https://i.balaan.io/review/c836c897ce27f22497d14d8e9f461ece.webp",
      createDt: "2022-02-21",
      review: "무난하게 데일리로 활용중입니다.",
      reviewRate: 5,
      likeCnt: 244,
      comments: [
        {
          commentId: "9bed8c34-9ab9-11ec-b909-0242ac120002",
          content: "내부 수납공간은 어떤가요?",
        },
      ],
    },
  ],
};

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReview(state, action: PayloadAction<any>) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      state.reviews.push(action.payload);
    },
  },
});

export const { setReview } = reviewSlice.actions;

export default reviewSlice;
