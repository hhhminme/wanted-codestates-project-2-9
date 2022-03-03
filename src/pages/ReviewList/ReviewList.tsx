import React, { useState } from "react";
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import ViewTab from "src/components/ViewTab";
import ReviewGrid from "src/components/ReviewGrid";

const tabData = [
  { id: 1, name: "grid", icon: BsGrid3X3 },
  { id: 2, name: "list", icon: BsViewList },
];

function ReviewList() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div>
      <ViewTab data={tabData} tabHandler={(type: string) => setViewType(type)} />
      {viewType === "grid" && <ReviewGrid />}
      {viewType === "list" && <div>리스트 뷰 데이터 뿌려</div>}
    </div>
  );
}

export default ReviewList;
