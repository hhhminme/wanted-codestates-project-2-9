import React from "react";

import * as S from "./style";

interface Props {
  comment: string;
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <S.Wrapper>
      <span>{comment}</span>
    </S.Wrapper>
  );
};

export default Comment;
