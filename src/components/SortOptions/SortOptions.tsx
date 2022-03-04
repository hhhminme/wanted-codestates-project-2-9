import React, { useState } from "react";
import { IconType } from "react-icons";
// import * as Bs from "react-icons/bs";
import * as S from "./style";

export type optionData = {
  id: number;
  option: string;
};

export interface SortOptionsProps {
  data: optionData[];
  optionHandler: (type: string) => void;
}

function SortOptions({ data, optionHandler }: SortOptionsProps) {
  const [activeId, setActiveId] = useState(1);

  const onClickOption = (item: optionData) => {
    optionHandler(item.option);
    setActiveId(item.id);
  };

  return (
    <S.ReviewSortTab>
      {data.map((item) => (
        <S.ReviewSortButton
          key={item.id}
          onClick={() => onClickOption(item)}
          active={item.id === activeId}
        >
          {item.option}
        </S.ReviewSortButton>
      ))}
    </S.ReviewSortTab>
  );
}

SortOptions.defaultProps = {
  data: [
    { id: 1, option: "최신순" },
    { id: 2, option: "좋아요 많은순" },
    { id: 3, option: "댓글 많은순" },
    { id: 4, option: "랜덤순" },
  ],
};

export default SortOptions;
