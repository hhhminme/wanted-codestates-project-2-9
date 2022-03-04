import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Star {
  active: boolean;
}
const Star = ({ active }: Star) => {
  const fillColor = active ? "#000" : "#CCC";

  return <AiFillStar fill={fillColor} />;
};
export default Star;
