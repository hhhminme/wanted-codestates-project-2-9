import React, { ForwardedRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

interface ReviewItemProps {
  id: string;
  reviewImg: string;
}

function ReviewItem(props: ReviewItemProps, ref: ForwardedRef<HTMLDivElement>) {
  const navigate = useNavigate();
  return (
    <S.ReviewsImageContainer
      ref={ref}
      onClick={() => {
        navigate(`./details/${props.id}`);
      }}
    >
      <S.ReviewsImage src={props.reviewImg} />
    </S.ReviewsImageContainer>
  );
}

export default forwardRef(ReviewItem);
