import React, { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { MdComment } from "react-icons/md";

import { useGetReviewById } from "./utils/useGetReviewById";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { reviews } from "src/redux/reviews";

const ReviewDetails = () => {
  const { id, productImg, likeCnt, productNm, review } = useGetReviewById();
  const [clickLike, setClickLike] = useState(false);
  const dispatch = useDispatch();

  const handleLikeBtn = () => {
    const increaseLike = !clickLike;

    setClickLike((prevClickLike) => !prevClickLike);
    dispatch(reviews.actions.updateLikeCnt(id, increaseLike));
  };

  return (
    <S.Wrapper>
      <S.Img src={productImg} />
      <S.Mid1>
        <S.Section>
          {clickLike && <S.ClickedLikeBtn onClick={handleLikeBtn} size={20} />}
          {!clickLike && <S.NotClickedLikeBtn onClick={handleLikeBtn} size={20} />}
          <S.H3>{likeCnt}</S.H3>
        </S.Section>
        <S.Section>
          <MdComment size={20} />
          <FiPaperclip size={20} />
        </S.Section>
      </S.Mid1>
      <S.H1>{productNm}</S.H1>
      <S.P>{review}</S.P>
    </S.Wrapper>
  );
};

export default ReviewDetails;
