import React, { ForwardedRef, forwardRef } from "react";

import * as S from "./style";

interface ReviewItemProps {
  reviewImg: string;
}

function ReviewItem(props: ReviewItemProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <S.ReviewsImageContainer ref={ref}>
      <S.ReviewsImage src={props.reviewImg} />
    </S.ReviewsImageContainer>
  );
}

export default forwardRef(ReviewItem);
