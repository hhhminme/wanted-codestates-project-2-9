import styled from "styled-components";

export const ReviewListWrapper = styled.div`
  height: calc(100vh - 120px);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewSort = styled.div`
  height: 60px;
  margin: 5px 0;
  background: lightblue;
`;

export const ReviewsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;
