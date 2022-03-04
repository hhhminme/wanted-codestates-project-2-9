import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { MdAddPhotoAlternate } from "react-icons/md";

import { addReview } from "src/redux/reviews/reviewSlice";
import * as S from "./style";
import Stars from "src/components/Stars";
import { Blob } from "buffer";
import { Review } from "../../redux/reviews/types";
import { useNavigate } from "react-router-dom";

function ReviewRegister() {
  const starArray = [1, 2, 3, 4, 5];
  const [images, setImages] = useState<string[] | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [titleRegEx, setTitleRegEx] = useState(true);
  const [contentRegEx, setContentRegEx] = useState(true);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [uploadClick, setUploadClick] = useState(false);
  const [starState, setStarState] = useState(false);

  const titleInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickUpload = () => {
    setUploadClick(true);
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

  // 이미지는 업로드 됐으나 제목 혹은 내용이 정규 표현식에 맞지 않을
  // 경우 모달을 띄우고 서밋이 되지 않게 한다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!images) {
      setModalContent("이미지를 업로드해주세요");
      setModalState(true);
      return;
    }
    if (titleRegEx === false || contentRegEx === false || rating < 1) {
      if (!starState) {
        setStarState(true);
      }
      setModalContent("필요한 항목을 모두 입력해주세요");
      setModalState(true);
      return;
    }
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
      navigate("/");
    }
  };

  const RegExValidation = (value: string) => {
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\s|\\.|!|?|~]+$/;
    return regex.test(value);
  };

  const handleChangeRegEx = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (e.target.value.length <= e.target.maxLength) {
      e.target.value !== "" ? setter(RegExValidation(e.target.value)) : setter(true);
    } else if (e.target.value.length >= e.target.maxLength) {
      setter(false);
    } else {
      setter(true);
    }
    // e.target.value !== "" ? setter(RegExValidation(e.target.value)) : setter(true);
    // e.target.value.length >= e.target.maxLength ? setter(false) : setter(true);
  };

  return (
    <S.ReviewWrap>
      {modalState && (
        <>
          <S.ModalWrap>
            <S.ModalCard>
              <S.ModalContentWrap>
                <S.ModalContent>{modalContent}</S.ModalContent>
              </S.ModalContentWrap>
              <S.ModalCloseBtn
                type="button"
                onClick={() => {
                  setModalState(false);
                }}
              >
                닫기
              </S.ModalCloseBtn>
            </S.ModalCard>
          </S.ModalWrap>
          <S.modalBackground></S.modalBackground>
        </>
      )}
      <S.formWrap onSubmit={handleSubmit}>
        <div>
          <S.LabelTitle htmlFor="title">제목</S.LabelTitle>
          <S.TitleInput
            id="title"
            name="title"
            type="text"
            placeholder="리뷰 제목을 입력해주세요"
            maxLength={10}
            ref={titleInput}
            required
            onChange={(e) => handleChangeRegEx(e, setTitleRegEx)}
          />
          {!titleRegEx && (
            <S.RegExMsg>
              30글자를 초과하거나 한글,영어 및 .~!?를 제외한 특수문자는 사용하실 수 없습니다.
            </S.RegExMsg>
          )}
        </div>
        <div>
          <S.LabelTitle htmlFor="content">내용</S.LabelTitle>
          <S.ContentInput
            id="content"
            name="content"
            rows={4}
            cols={10}
            maxLength={10}
            placeholder="리뷰 내용을 입력해주세요"
            ref={contentInput}
            required
            onChange={(e) => handleChangeRegEx(e, setContentRegEx)}
          />
          {!contentRegEx && (
            <S.RegExMsg>
              100글자를 초과하거나 한글,영어 및 .~!?를 제외한 특수문자는 사용하실 수 없습니다.
            </S.RegExMsg>
          )}
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
          <S.ImgUploadBtn onClick={handleClickUpload} type="button">
            이미지 업로드
          </S.ImgUploadBtn>
        </div>
        <S.PreviewWrap>
          {images &&
            images.map((image, idx) => (
              <S.PreviewImgWrap key={idx}>
                <S.PreviewImg src={image} />
              </S.PreviewImgWrap>
            ))}
        </S.PreviewWrap>
        <S.StarTitle>평점</S.StarTitle>
        {starState && <S.RegExMsg>평점을 입력해주세요.</S.RegExMsg>}
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
                setState={setStarState}
              />
            );
          })}
        </S.starWrap>

        <S.SummitBtn type="submit">리뷰 등록하기</S.SummitBtn>
      </S.formWrap>
    </S.ReviewWrap>
  );
}

export default ReviewRegister;
