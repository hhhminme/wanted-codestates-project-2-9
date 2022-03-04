import styled from "styled-components";
import { MdOutlineThumbUp, MdThumbUp, MdOutlineModeComment, MdShare } from "react-icons/md";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Img = styled.img``;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Mid1 = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & + & {
    margin-top: 15px;
  }
`;

export const H3 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Section = styled.div`
  display: flex;
  font-size: 1.2rem;
  gap: 10px;
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 2px;
  font-size: 1.6rem;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 15px;
`;
export const P = styled.p`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

export const ClickedLikeBtn = styled(MdThumbUp)`
  cursor: pointer;
`;
export const NotClickedLikeBtn = styled(MdOutlineThumbUp)`
  cursor: pointer;
`;
export const CommentBtn = styled(MdOutlineModeComment)`
  cursor: pointer;
`;
export const ShareBtn = styled(MdShare)`
  cursor: pointer;
`;
