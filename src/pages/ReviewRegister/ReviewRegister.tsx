import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./style";
import Stars from "src/components/Stars";
import { reviewSlice } from "../../redux/reviewSlice";

function ReviewDetails() {
  const starArray = [1, 2, 3, 4, 5];
  const [images, setImages] = useState<FileList | null>(null);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.

  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("log");

    dispatch(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      reviewSlice.actions.set({
        id: "3731858a-9ab8-11ec-b909-0242ac120002",
        productNm: "맥북 M1 프로 14인치",
        productImg: "https://i.balaan.io/review/c836c897ce27f22497d14d8e9f461ece.webp",
        createDt: "2022-02-21",
        review: "무난하게 데일리로 활용중입니다.",
        reviewRate: 5,
        likeCnt: 244,
        comments: [
          {
            commentId: "9bed8c34-9ab9-11ec-b909-0242ac120002",
            content: "내부 수납공간은 어떤가요?",
          },
        ],
      }),
    );
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0]);
    setImages(e.target.files);
  };

  return (
    <div>
      <form>
        <label>
          제목
          <input type="text"></input>
        </label>
        <label>
          내용
          <input type="textarea" />
        </label>
        <input type="file" onChange={onChangeImage} ref={imageInput} multiple hidden />
        <button onClick={onClickImage}>이미지 업로드</button>

        <S.starWrap>
          {starArray.map((idx) => {
            return (
              <Stars
                key={idx}
                index={idx}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            );
          })}
        </S.starWrap>

        <button type="submit">리뷰 등록하기</button>
      </form>
    </div>
  );
}

export default ReviewDetails;
