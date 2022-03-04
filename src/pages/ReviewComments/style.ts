import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Comments = styled.ul`
  list-style: none;
  background: white;
  padding-bottom: 80px;
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
  padding: 20px 20px;
`;

export const CommentButton = styled.button`
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: 2px solid black;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;
