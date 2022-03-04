import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { useGetReviewById } from "./utils/useGetReviewById";
import * as S from "./style";
import Meta from "src/components/Meta";
import { copyToClipboard } from "./utils/copyToClipboard";
import { updateLikeCnt } from "src/redux/reviews/reviewSlice";

const ReviewDetails = () => {
  const { id, productImg, likeCnt, productNm, review } = useGetReviewById();
  const [clickLike, setClickLike] = useState(false);
  const dispatch = useDispatch();

  const handleLikeBtn = () => {
    const increaseLike = !clickLike;

    setClickLike((prevClickLike) => !prevClickLike);
    dispatch(updateLikeCnt(id, increaseLike));
  };

  const metaData = {
    title: "❤️발란❤️ 리뷰 페이지",
    description: "작성된 리뷰를 확인해 보세요!",
    canonical: "http://127.0.0.1:8080/details/1",
  };
  const handleShareBtn = () => {
    copyToClipboard(window.location.href);
  };
  return (
    <>
      <Meta data={metaData} />
      <S.Wrapper>
        <S.Img src={productImg[0]} />
        <S.Mid1>
          <S.Section>
            {clickLike && <S.ClickedLikeBtn onClick={handleLikeBtn} size={20} />}
            {!clickLike && <S.NotClickedLikeBtn onClick={handleLikeBtn} size={20} />}
            <S.H3>{likeCnt}</S.H3>
          </S.Section>
          <S.Section>
            <S.CommentBtn size={20} />
            <S.ShareBtn onClick={handleShareBtn} size={20} />
          </S.Section>
        </S.Mid1>
        <S.H1>{productNm}</S.H1>
        <S.P>{review}</S.P>
      </S.Wrapper>
    </>
  );
};

export default ReviewDetails;
