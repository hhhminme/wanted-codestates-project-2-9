import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./style";
import { addComment } from "../../redux/reviews/reviewSlice";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const CommentForm: React.FC<Props> = ({ setShow, id }) => {
  const [textLength, setTextLength] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextLength(e.target.value.length);
    setComment(e.target.value);
  };

  const handleClickCancelBtn = () => {
    setShow(false);
  };

  const handleClickConfirmBtn = () => {
    dispatch(addComment({ comment, id }));
    setShow(false);
  };
  return (
    <S.Background >
      <S.Form>
        <S.Title>댓글을 입력해주세요</S.Title>
        <S.Textarea maxLength={500} onChange={handleChange} />
        <S.TextCounter>{textLength} / 500</S.TextCounter>
        <S.Wrapper>
          <S.CancelBtn onClick={handleClickCancelBtn}>취소</S.CancelBtn>
          <S.ConfirmBtn onClick={handleClickConfirmBtn}>확인</S.ConfirmBtn>
        </S.Wrapper>
      </S.Form>
    </S.Background>
  );
};

export default CommentForm;
