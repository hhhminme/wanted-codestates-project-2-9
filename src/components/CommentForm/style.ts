import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
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
  font-size: 1.6rem;
  height: 200px;
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
`;

export const ConfirmBtn = styled(CancelBtn)``;
