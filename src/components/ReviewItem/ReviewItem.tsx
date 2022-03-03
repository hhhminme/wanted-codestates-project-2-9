import React, { ForwardedRef, forwardRef } from "react";

import * as S from "./style";

interface ReviewItemProps {
  reviewImg: string;
}

function ReviewItem(props: ReviewItemProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <S.ReviewsImageContainer ref={ref}>
      <S.Dummy></S.Dummy>
      <S.ReviewsImage src={props.reviewImg} />
    </S.ReviewsImageContainer>
  );
}

export default forwardRef(ReviewItem);
