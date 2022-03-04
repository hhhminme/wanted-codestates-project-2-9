import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "src/redux/store";

export const useGetReviewById = () => {
  const { data: reviews } = useSelector((store: RootState) => store?.reviews);
  const { id: reviewId } = useParams();

  return reviews.filter(({ id }) => id === reviewId)[0];
};
