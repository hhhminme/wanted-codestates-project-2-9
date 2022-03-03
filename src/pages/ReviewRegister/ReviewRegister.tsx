import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";

import { add } from "../../redux/reviewSlice";

function ReviewDetails() {
  const [images, setImages] = useState<FileList | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews);

  const onClickImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(
      add({
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
    setImages(e.target.files);
  };

  console.log(reviews);

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
        <button type="submit">리뷰 등록하기</button>
      </form>
    </div>
  );
}

export default ReviewDetails;
