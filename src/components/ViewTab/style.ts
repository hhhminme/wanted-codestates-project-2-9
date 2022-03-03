import styled from "styled-components";

export const TabBlock = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const TabItem = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 15px;
  font-size: 2rem;
  border-bottom: 2px solid;
  border-color: ${(props) => (props.active ? "black" : "white")};
  opacity: ${(props) => (props.active ? "100%" : "20%")};
`;
