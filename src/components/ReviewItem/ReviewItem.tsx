import React from "react";

import * as S from "./style";

interface ReviewItempProps {
  reviewImg: string;
}

function ReviewItem({ reviewImg }: ReviewItempProps) {
  return (
    <>
      <S.ReviewsImageContainer>
        <S.Dummy></S.Dummy>
        <S.ReviewsImage src={reviewImg} />
      </S.ReviewsImageContainer>
    </>
  );
}

export default ReviewItem;
