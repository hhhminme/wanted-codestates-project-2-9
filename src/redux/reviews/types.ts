type Reviews = {
  id: string;
  productNm: string;
  productImg: string;
  createDt: string;
  review: string;
  reviewRate: number;
  likeCnt: number;
  comments: {
    commentId: string;
    comment: string;
  }[];
}[];

export interface ReviewState {
  data: Reviews;
}
