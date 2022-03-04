import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { MdAddPhotoAlternate } from "react-icons/md";

import { RootState } from "src/redux/store";
import { addReview } from "src/redux/reviews/reviewSlice";
import * as S from "./style";
import Stars from "src/components/Stars";
import { Blob } from "buffer";
import { Review } from "../../redux/reviews/types";

function ReviewDetails() {
  const starArray = [1, 2, 3, 4, 5];
  const [images, setImages] = useState<string[] | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const titleInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.reviews);

  const handleClickUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    imageInput.current?.click();
  };

  const handleChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const blobFiles: string[] = [];

    if (files) {
      // @ts-ignore
      for (const file of files) {
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
      dispatch(addReview(data));
      console.log("submited!!!");
    }
  };

  return (
    <S.ReviewWrap>
      <S.formWrap onSubmit={handleSubmit}>
        <div>
          <S.LabelTitle htmlFor="title">제목</S.LabelTitle>
          <S.TitleInput
            id="title"
            name="title"
            type="text"
            placeholder="리뷰 제목을 입력해주세요"
            ref={titleInput}
          />
        </div>
        <div>
          <S.LabelTitle htmlFor="content">내용</S.LabelTitle>
          <S.ContentInput
            id="content"
            name="content"
            rows={4}
            cols={10}
            maxLength={100}
            placeholder="리뷰 내용을 입력해주세요"
            ref={contentInput}
          />
        </div>
        <input
          type="file"
          onChange={handleChangeUpload}
          ref={imageInput}
          accept="image/*"
          multiple
          hidden
        />
        <div>
          <MdAddPhotoAlternate fill="#fff" />
          <S.ImgUploadBtn onClick={handleClickUpload}>이미지 업로드</S.ImgUploadBtn>
        </div>

        {/* 미리보기 */}
        <S.PreviewWrap>
          {images &&
            images.map((image, idx) => (
              <S.PreviewImgWrap key={idx}>
                <S.PreviewImg src={image} />
              </S.PreviewImgWrap>
            ))}
        </S.PreviewWrap>
        <S.StarTitle>평점</S.StarTitle>
        <S.starWrap>
          {starArray.map((idx) => {
            return (
              <Stars
                key={idx}
                index={idx}
                rating={rating}
                hoverRating={hoverRating}
                setHoverRating={setHoverRating}
                setRating={setRating}
              />
            );
          })}
        </S.starWrap>
        <S.SummitBtn type="submit">리뷰 등록하기</S.SummitBtn>
      </S.formWrap>

      {/* 테스트 */}
      {/* {reviews &&
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
        ))} */}
    </S.ReviewWrap>
  );
}

export default ReviewDetails;
