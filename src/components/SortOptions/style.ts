import styled, { css } from "styled-components";

export const ReviewSortTab = styled.div`
  height: 60px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  background: white;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewSortButton = styled.button<{ active: boolean }>`
  line-height: 1;
  background: white;
  border: 1px solid black;
  padding: 10px 15px;
  font-size: 1.5rem;
  color: black;
  border-radius: 50px;
  font-weight: bold;

  & + & {
    margin-left: 10px;
  }

  ${({ active }) =>
    active &&
    css`
      background: black;
      color: white;
    `}
`;
