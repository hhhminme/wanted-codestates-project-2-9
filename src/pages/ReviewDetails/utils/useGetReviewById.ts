import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "src/redux/store";

export const useGetReviewById = () => {
  const reviews = useSelector((store: RootState) => store?.reviews);
  console.log(reviews, "reviews");
  const { id: reviewId } = useParams();

  return reviews.filter(({ id }) => id === reviewId)[0];
};
