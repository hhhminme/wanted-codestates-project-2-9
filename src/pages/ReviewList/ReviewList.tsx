import React, { useState } from "react";
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import ViewTab from "src/components/ViewTab";
import * as S from "./style";

const tabData = [
  { id: 1, name: "grid", icon: BsGrid3X3 },
  { id: 2, name: "list", icon: BsViewList },
];

function ReviewList() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div>
      <ViewTab data={tabData} tabHandler={(type: string) => setViewType(type)} />
      {viewType === "grid" && (
        <S.GridViewContainer>
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
          <img src="https://dummyimage.com/130x130.jpg" alt="" />
        </S.GridViewContainer>
      )}
      {viewType === "list" && <div>리스트 뷰 데이터 뿌려</div>}
    </div>
  );
}

export default ReviewList;
