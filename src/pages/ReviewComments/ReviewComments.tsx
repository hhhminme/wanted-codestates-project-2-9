import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./style";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import Comment from "src/components/Comment";
import { CommentData } from "./model";
import CommentForm from "src/components/CommentForm";

const ReviewComments: React.FC = () => {
  const data = useSelector((state: RootState) => state.reviews);
  // const { id } = useParams();
  const id = "1";
  const [comments, setComments] = useState<CommentData[] | []>([]);
  const [show, setShow] = useState(false);

  //
  useEffect(() => {
    const targetReview = data.data.filter((item) => item.id === id);
    setComments(targetReview[0].comments);
  }, []);

  const handleClickBtn = () => {
    setShow(true);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>댓글 달기</S.Title>
        <S.Comments>
          {comments.map((item) => (
            <Comment key={item.commentId} comment={item.comment} />
          ))}
        </S.Comments>
        <S.Footer>
          <S.CommentButton onClick={handleClickBtn}>댓글 달기</S.CommentButton>
        </S.Footer>
      </S.Wrapper>
      {show && <CommentForm setShow={setShow} />}
    </S.Container>
  );
};

export default ReviewComments;
