import React, { useEffect, useRef, useState } from "react";
import { ReviewData } from "../../redux/reviews/types";
import { useSelector } from "react-redux";

import * as S from "./style";

import ReviewItem from "src/components/ReviewItem";
import SortOptions from "../SortOptions";
import { RootState } from "src/redux/store";

const sortOptionsData = [
  { id: 1, option: "최신순" },
  { id: 2, option: "좋아요 많은순" },
  { id: 3, option: "댓글 많은순" },
  { id: 4, option: "랜덤순" },
];

function ReviewGrid() {
  const itemData = useSelector((state: RootState) => state.reviews);
  const [sortOption, setSortOption] = useState("최신순");
  const [reviews, setReviews] = useState<ReviewData>(itemData.slice(0, 30));
  const [reviewsPage, setReviewsPage] = useState<number>(0);
  const observerRef = React.useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reviewsCopy = [...reviews];

    switch (sortOption) {
      case "좋아요 많은순":
        reviewsCopy.sort((a, b) => a.likeCnt - b.likeCnt);
        return setReviews(reviewsCopy);
      case "댓글 많은순":
        reviewsCopy.sort((a, b) => a.comments.length - b.comments.length);
        return setReviews(reviewsCopy);
      case "랜덤순":
        reviewsCopy.sort(() => Math.random() - 0.5);
        return setReviews(reviewsCopy);
      default:
        return setReviews(reviews);
    }
  }, [sortOption]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, [reviews]);

  const getData = () => {
    if (itemData.length >= (reviewsPage + 1) * 30) {
      const additionalData = itemData.slice(reviewsPage * 30, (reviewsPage + 1) * 30);
      setReviewsPage((reviewsPage) => reviewsPage + 1);
      setReviews([...reviews, ...additionalData]);
    }
  };

  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        getData();
      }
    });
  };

  return (
    <S.ReviewListWrapper>
      <SortOptions
        optionHandler={(option: string) => setSortOption(option)}
        data={sortOptionsData}
      />
      <S.ReviewsWrapper>
        {reviews.map((item, index) => {
          if (index === reviews.length - 7) {
            return (
              <ReviewItem ref={targetRef} key={index} id={item.id} reviewImg={item.productImg[0]} />
            );
          }
          return <ReviewItem key={index} id={item.id} reviewImg={item.productImg[0]} />;
        })}
      </S.ReviewsWrapper>
    </S.ReviewListWrapper>
  );
}

export default ReviewGrid;
