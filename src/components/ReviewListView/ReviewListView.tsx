import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ReviewData } from "src/redux/reviews/types";
import { RootState } from "src/redux/store";
import * as S from "./style";

import ReviewDetailItem from "../ReviewDetailItem";

function ReviewListView() {
  const data = useSelector((state: RootState) => state.reviews);
  const [reviews, setReviews] = useState<ReviewData>(data.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);

  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionOberverCallback);
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, [reviews]);

  const attatchData = () => {
    if (data.length >= currentPage * 10) {
      const additionnalData = data.slice(currentPage * 10, (currentPage + 1) * 10);
      setCurrentPage((currentPage) => currentPage + 1);
      setReviews([...reviews, ...additionnalData]);
    }
  };

  const intersectionOberverCallback = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        attatchData();
      }
    });
  };

  return (
    <S.ListViewContainer>
      {reviews.map((item, index) => {
        if (index === reviews.length - 2) {
          return <ReviewDetailItem ref={targetRef} key={item.id} reviewId={item.id} />;
        }
        return <ReviewDetailItem key={item.id} reviewId={item.id} />;
      })}
    </S.ListViewContainer>
  );
}

export default ReviewListView;
