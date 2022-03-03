import React, { useRef, useState } from "react";

function ReviewDetails() {
  const [images, setImages] = useState([]);
  const imageInput = useRef<HTMLInputElement>(null);

  const onClickImage = () => {
    imageInput.current?.click();
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([...e.target.files]);
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
        <button type="submit">리뷰 등록하기</button>
      </form>
    </div>
  );
}

export default ReviewDetails;
