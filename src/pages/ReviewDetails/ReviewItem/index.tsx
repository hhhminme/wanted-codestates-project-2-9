import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Meta from "src/components/Meta";
import { updateLikeCnt } from "src/redux/reviews/reviewSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Star from "./Star";
import { useGetReviewById } from "./utils/useGetReviewById";
import { copyToClipboard } from "./utils/\bcopyToClipboard";
import * as S from "./style";

interface reviewId {
  reviewId: string;
  isPage?: boolean;
}
const ReviewItem = ({ reviewId, isPage = false }: reviewId) => {
  const { id, productImg, likeCnt, productNm, review, reviewRate, createDt } =
    useGetReviewById(reviewId);

  const [clickLike, setClickLike] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLikeBtn = () => {
    const increaseLike = !clickLike;

    setClickLike((prevClickLike) => !prevClickLike);
    dispatch(updateLikeCnt(id, increaseLike));
  };

  const handleCommentBtn = () => {
    navigate(`${pathname}/comments`);
  };

  const metaData = {
    title: "❤️발란❤️ 리뷰 페이지",
    description: "작성된 리뷰를 확인해 보세요!",
    canonical: window?.location?.href,
  };

  const handleShareBtn = () => {
    copyToClipboard(window.location.href);
  };

  const starActive = new Array(5).fill(0).map((_, idx) => idx < reviewRate);

  const createAt = () => {
    const a = new Date(createDt)
      .toLocaleString("ko-KR")
      .split(" ")
      .slice(0, 3)
      .join("")
      .replace(/\./g, "-");
    return a.substring(0, a.length - 1);
  };

  return (
    <>
      {isPage && <Meta data={metaData} />}
      <S.Wrapper>
        <S.Img src={productImg[0]} />
        <S.Mid1>
          <S.Section>
            {clickLike && <S.ClickedLikeBtn onClick={handleLikeBtn} size={20} />}
            {!clickLike && <S.NotClickedLikeBtn onClick={handleLikeBtn} size={20} />}
            <S.H3>{likeCnt}</S.H3>
          </S.Section>
          <S.Section>
            <S.CommentBtn size={20} onClick={handleCommentBtn} />
            <S.ShareBtn onClick={handleShareBtn} size={20} />
          </S.Section>
        </S.Mid1>
        <S.Mid1>
          <S.Section>
            {starActive.map((active, idx) => (
              <Star key={idx} active={active} />
            ))}
          </S.Section>
          <S.H3>{createAt()}</S.H3>
        </S.Mid1>
        <S.H1>{productNm}</S.H1>
        <S.P>{review}</S.P>
      </S.Wrapper>
    </>
  );
};

export default ReviewItem;
