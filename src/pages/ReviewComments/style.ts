import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: gray;
`;

export const Wrapper = styled.div`
  width: 390px;
  height: 100vh;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 15px;
`;

export const Comments = styled.ul`
  background-color: yellowgreen;
  list-style: none;
  margin-top: 20px;
`;

export const CommentButton = styled.button`
  border-radius: 30px;
  position: fixed;
  bottom: 13px;
  margin: 0 10px;
  font-size: 2.2rem;
  padding: 5px 140px;
  background-color: white;
  border: 2px solid black;
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(0.95);
  }
`;
