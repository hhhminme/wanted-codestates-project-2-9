import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export const useGetReviewById = (reviewId: string) => {
  const reviews = useSelector((store: RootState) => store?.reviews);

  return reviews.filter(({ id }) => id === reviewId)[0];
};
