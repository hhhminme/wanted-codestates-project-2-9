import styled from "styled-components";

export const formWrap = styled.form`
  display: flex-col;
`;

export const ReviewWrap = styled.div`
  padding: 2rem;
`;

export const LabelTitle = styled.label`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
`;

export const TitleInput = styled.input`
  display: block;
  width: 100%;
  height: 3.9rem;
  padding: 0.6rem;
  margin-bottom: 3rem;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  color: #000;

  :focus {
    border: 1px solid #000;
  }
`;

export const ContentInput = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 3rem;
  border-radius: 0.2rem;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  color: #000;

  :focus {
    border: 1px solid #000;
  }
`;

export const ImgUploadBtn = styled.button`
  font-size: 1.6rem;
  background-color: #000;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 3rem;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
`;

export const PreviewWrap = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PreviewImgWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 1px solid #ccc;
  margin: 0.2rem;

  :first-child {
    margin-left: 0;
  }
`;
export const PreviewImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;

export const StarTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const starWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
`;

export const SummitBtn = styled.button`
  font-size: 1.6rem;
  background-color: #000;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
`;

export const RegExMsg = styled.p`
  display: inline-block;
  font-size: 1rem;
  color: #dd4a48;
  padding-left: 1rem;
`;

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  z-index: 50;
`;

export const ModalCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  border: 0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const ModalCloseBtn = styled.button`
  font-size: 1.6rem;
  background-color: #000;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: bold;
`;

export const ModalContentWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  font-weight: 600;
`;

export const ModalContent = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const modalBackground = styled.div`
  opacity: 0.25;
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: black;
`;
