import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "src/redux/store";
import { add } from "../../redux/reviewSlice";
import * as S from "./style";
import Stars from "src/components/Stars";
import { Blob } from "buffer";
import { Review } from "../../redux/reviewSlice";

function ReviewDetails() {
  const starArray = [1, 2, 3, 4, 5];
  const [images, setImages] = useState<string[] | null>(null);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.

  const titleInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews);

  const handleClickUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    imageInput.current?.click();
    console.dir(e.target);
    console.log("click");
  };

  const handleChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const blobFiles: string[] = [];
    console.log(e.target.files);

    if (files) {
      // @ts-ignore
      for (const file of files) {
        console.log(file);
        // @ts-ignore
        blobFiles.push(URL.createObjectURL(file as Blob));

        setImages(blobFiles);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (images) {
      const data: Review = {
        id: uuidv4(),
        // @ts-ignore
        productNm: titleInput.current.value,
        productImg: images,
        createDt: Date.now(),
        // @ts-ignore
        review: contentInput.current.value,
        reviewRate: rating,
        likeCnt: 0,
        comments: [],
      };
      dispatch(add(data));
      console.log("submited!!!");
    }
  };

  console.log("images", images);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          제목
          <input type="text" ref={titleInput}></input>
        </label>
        <label>
          내용
          <input type="textarea" ref={contentInput} />
        </label>
        <input
          type="file"
          onChange={handleChangeUpload}
          ref={imageInput}
          accept="image/*"
          multiple
          hidden
        />
        <button onClick={handleClickUpload}>이미지 업로드</button>

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
      {/* 미리보기 */}
      {images &&
        images.map((image, idx) => <img style={{ width: "100px" }} key={idx} src={image} />)}

      {/* 테스트 */}
      {reviews &&
        reviews.map((review, idx) => (
          <div key={idx}>
            <h2>{review.productNm}</h2>
            <h2>{review.review}</h2>
            <h2>{review.reviewRate}</h2>
            <h2>{review.createDt}</h2>
            {review.productImg.map((img, id) => (
              <img style={{ width: "100px" }} key={id} src={img} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default ReviewDetails;
