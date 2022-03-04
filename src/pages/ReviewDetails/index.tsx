import React from "react";
import ReviewItem from "../../components/ReviewDetailItem";

import { useParams } from "react-router-dom";
const ReviewDetails = () => {
  const { id } = useParams();

  return <ReviewItem reviewId={id as string} isPage />;
};
export default ReviewDetails;
