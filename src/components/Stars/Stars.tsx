import React, { useMemo } from "react";

import { AiFillStar } from "react-icons/ai";

interface Props {
  index: number;
  rating: number;
  hoverRating: number;
  setHoverRating: React.Dispatch<React.SetStateAction<number>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

function Stars(props: Props) {
  const { index, rating, hoverRating } = props;

  const onMouseEnter = (index: number) => props.setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => props.setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => props.setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.

  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return "#000";
    } else if (!hoverRating && rating >= index) {
      return "#000";
    }
    return "#ccc";
  }, [rating, hoverRating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <AiFillStar color={fillColor} size="2rem" />
    </div>
  );
}

export default Stars;
