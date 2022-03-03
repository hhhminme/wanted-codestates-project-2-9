import React, { useMemo, useRef } from "react";
import * as S from "./style";

import { FaStar } from "react-icons/fa";

interface Props {
  index: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
}

function Stars(props: Props) {
  const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating } = props;

  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return "#ffdb58";
    } else if (!hoverRating && rating >= index) {
      return "#ffdb58";
    }
    return "#dcdcdc";
  }, [rating, hoverRating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <FaStar color={fillColor} size="1.5rem" />
    </div>
  );
}

export default Stars;
