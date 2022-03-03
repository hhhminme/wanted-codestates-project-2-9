import styled from "styled-components";
import { HiOutlineThumbUp, HiThumbUp } from "react-icons/hi";

export const Wrapper = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 390px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;
export const Mid1 = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const H3 = styled.h2`
  font-size: 1.5rem;
`;
export const Section = styled.div`
  display: flex;
  gap: 10px;
`;
export const H1 = styled.h1`
  font-size: 2rem;
`;
export const P = styled.p`
  font-size: 1rem;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;
export const ClickedLikeBtn = styled(HiThumbUp)`
  cursor: pointer;
`;
export const NotClickedLikeBtn = styled(HiOutlineThumbUp)`
  cursor: pointer;
`;
