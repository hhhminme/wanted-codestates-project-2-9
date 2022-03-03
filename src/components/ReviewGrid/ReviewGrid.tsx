import React from "react";

import * as S from "./style";
import data from "../../assets/data";

import ReviewItem from "src/components/ReviewItem";

function ReviewGrid() {
  return (
    <S.ReviewListWrapper>
      <S.ReviewSort></S.ReviewSort>
      <S.ReviewsWrapper>
        {data.map((item, index) => {
          return <ReviewItem reviewImg={item.productImg} key={index} />;
        })}
      </S.ReviewsWrapper>
    </S.ReviewListWrapper>
  );
}

export default ReviewGrid;
