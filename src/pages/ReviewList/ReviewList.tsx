import React, { useState } from "react";
import { BsGrid3X3, BsViewList } from "react-icons/bs";
import ViewTab from "src/components/ViewTab";

const tabData = [
  { id: 1, name: "grid", icon: BsGrid3X3 },
  { id: 2, name: "list", icon: BsViewList },
];

function ReviewList() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div>
      <ViewTab data={tabData} tabHandler={(type: string) => setViewType(type)} />
      {viewType === "grid" && <div>그리드 뷰 데이터 뿌려</div>}
      {viewType === "list" && <div>리스트 뷰 데이터 뿌려</div>}
    </div>
  );
}

export default ReviewList;
