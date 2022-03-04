import React, { useState } from "react";
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import ViewTab from "src/components/ViewTab";
import ReviewGridView from "src/components/ReviewGridView";
//import ReviewListView from "src/components/ReviewListView";

import { BsArrowUpShort } from "react-icons/bs";
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
      {viewType === "grid" && <ReviewGridView />}
      {/* {viewType === "list" && <ReviewListView />} */}
      <S.ScrollTopButton onClick={() => window.scrollTo(0, 0)}>
        <BsArrowUpShort />
      </S.ScrollTopButton>
    </div>
  );
}

export default ReviewList;
