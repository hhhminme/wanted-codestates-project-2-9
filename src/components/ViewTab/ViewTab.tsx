import React, { useState } from "react";
import { IconType } from "react-icons";
// import * as Bs from "react-icons/bs";
import * as S from "./style";

export type TabData = {
  id: number;
  name: string;
  icon: IconType;
};

export interface TabProps {
  data: TabData[];
  tabHandler: (type: string) => void;
}

function ViewTab({ data, tabHandler }: TabProps) {
  const [activeId, setActiveId] = useState(1);

  const onClickTab = (item: TabData) => {
    setActiveId(item.id);
    tabHandler(item.name);
  };

  return (
    <S.TabBlock>
      {data.map((item) => (
        <S.TabItem key={item.id} active={item.id === activeId} onClick={() => onClickTab(item)}>
          <item.icon />
        </S.TabItem>
      ))}
    </S.TabBlock>
  );
}

export default ViewTab;
