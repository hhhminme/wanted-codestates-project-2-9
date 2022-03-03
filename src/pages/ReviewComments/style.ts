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
  height: 100%;
  background-color: white;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  margin-top: 15px;
  background-color: white;
`;

export const Comments = styled.ul`
  max-height: 100vh;
  list-style: none;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 390px;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

export const CommentButton = styled.button`
  border-radius: 30px;
  font-size: 2.2rem;
  padding: 5px 140px;
  background-color: white;
  border: 2px solid black;
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(0.95);
  }
`;
