import React, { useEffect, useState } from "react";

import * as S from "./style";
import data from "../../assets/data";

import ReviewItem from "src/components/ReviewItem";
import SortOptions from "../SortOptions";

const sortOptionsData = [
  { id: 1, option: "최신순" },
  { id: 2, option: "좋아요 많은순" },
  { id: 3, option: "댓글 많은순" },
  { id: 4, option: "랜덤순" },
];

function ReviewGrid() {
  const [sortOption, setSortOption] = useState("최신순");
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    const localDataCopy = [...localData];

    switch (sortOption) {
      case "좋아요 많은순":
        localDataCopy.sort((a, b) => a.likeCnt - b.likeCnt);
        return setLocalData(localDataCopy);
      case "댓글 많은순":
        localDataCopy.sort((a, b) => a.comments.length - b.comments.length);
        return setLocalData(localDataCopy);
      case "랜덤순":
        localDataCopy.sort(() => Math.random() - 0.5);
        return setLocalData(localDataCopy);
      default:
        return setLocalData(data);
    }
  }, [sortOption]);

  return (
    <S.ReviewListWrapper>
      <SortOptions
        optionHandler={(option: string) => setSortOption(option)}
        data={sortOptionsData}
      />
      <S.ReviewsWrapper>
        {localData.map((item, index) => {
          return <ReviewItem reviewImg={item.productImg} key={index} />;
        })}
      </S.ReviewsWrapper>
    </S.ReviewListWrapper>
  );
}

export default ReviewGrid;
