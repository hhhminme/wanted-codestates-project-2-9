export type Review = {
  id: string;
  productNm: string;
  productImg: string[];
  likeCnt: number;
  createDt: number;
  review: string;
  reviewRate: number;
  comments: CommentType[];
};

export type ReviewData = Review[];

export type CommentType = {
  commentId: string;
  comment: string;
};

export type CommentPayload = {
  id: string;
  comment: string;
};
