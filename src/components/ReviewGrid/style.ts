import styled from "styled-components";

export const ReviewListWrapper = styled.div`
  height: calc(100vh - 120px);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;
