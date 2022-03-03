import React from "react";

import * as S from "./style";

const ReviewComments: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>댓글 달기</S.Title>
        <S.Comments>
          <li>comment</li>
        </S.Comments>
        <S.CommentButton>댓글 달기</S.CommentButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default ReviewComments;
