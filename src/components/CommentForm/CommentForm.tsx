import React from "react";

import * as S from "./style";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentForm: React.FC<Props> = ({ setShow }) => {
  const handleClickCancelBtn = () => {
    setShow(false);
  };

  const handleClickConfirmBtn = () => {
    console.log("댓글 달기!");
    setShow(false);
  };
  return (
    <S.Background>
      <S.Form>
        <S.Title>댓글을 입력해주세요</S.Title>
        <S.Textarea />
        <S.TextCounter>0 / 500</S.TextCounter>
        <S.Wrapper>
          <S.CancelBtn onClick={handleClickCancelBtn}>취소</S.CancelBtn>
          <S.ConfirmBtn onClick={handleClickConfirmBtn}>확인</S.ConfirmBtn>
        </S.Wrapper>
      </S.Form>
    </S.Background>
  );
};

export default CommentForm;
