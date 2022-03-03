import React from "react";

import * as S from "./style";

const CommentForm: React.FC = () => {
  return (
    <S.Background>
      <S.Form>
        <S.Title>댓글을 입력해주세요</S.Title>
        <S.Textarea />
        <S.TextCounter>0 / 500</S.TextCounter>
        <S.Wrapper>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.ConfirmBtn>확인</S.ConfirmBtn>
        </S.Wrapper>
      </S.Form>
    </S.Background>
  );
};

export default CommentForm;
