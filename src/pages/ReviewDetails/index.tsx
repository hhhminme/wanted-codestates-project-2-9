import React from "react";
import { FiThumbsUp, FiPaperclip } from "react-icons/fi";
import { MdComment } from "react-icons/md";

import { useGetReviewById } from "./utils/useGetReviewById";
import * as S from "./style";

const ReviewDetails = () => {
  const { productImg, likeCnt, productNm, review } = useGetReviewById();
  return (
    <S.Wrapper>
      <S.Img src={productImg} />
      <S.Mid1>
        <S.Section>
          <FiThumbsUp size={20} />
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
