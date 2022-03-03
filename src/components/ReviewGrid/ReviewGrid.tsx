import React, { useEffect, useRef, useState } from "react";

import * as S from "./style";

import ReviewItem from "src/components/ReviewItem";

import { ReviewData } from "../../assets/data";
import data from "../../assets/data";

function ReviewGrid() {
  const [reviews, setReviews] = useState<ReviewData>(data);
  const observerRef = React.useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, [reviews]);

  const getData = () => {
    setReviews([...reviews, ...data]);
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
      <S.ReviewSort></S.ReviewSort>
      <S.ReviewsWrapper>
        {reviews.map((item, index) => {
          if (index === reviews.length - 7) {
            return <ReviewItem ref={targetRef} key={index} reviewImg={item.productImg} />;
          }
          return <ReviewItem reviewImg={item.productImg} key={index} />;
        })}
      </S.ReviewsWrapper>
    </S.ReviewListWrapper>
  );
}

export default ReviewGrid;
