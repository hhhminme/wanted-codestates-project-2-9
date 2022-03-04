import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 390px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  height: 350px;
  width: 390px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  height: 200px;
  font-size: 1.6rem;
  padding-left: 7px;
  border: 1px solid black;
  outline: none;
  resize: none;
`;

export const TextCounter = styled.div`
  margin-top: 5px;
  font-size: 1.4rem;
  text-align: end;
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
`;

export const CancelBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 1.4rem;
  padding: 5px 15px;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ConfirmBtn = styled(CancelBtn)``;
