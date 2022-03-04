type Reviews = {
  id: string;
  productNm: string;
  productImg: string;
  createDt: string;
  review: string;
  reviewRate: number;
  likeCnt: number;
  comments: TypeComments;
};
type TypeComments =
  | {
      commentId: string;
      content: string;
    }[]
  | [];
export interface ReviewState {
  data: Reviews[];
}
