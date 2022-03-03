import styled from "styled-components";

export const NavBlock = styled.div`
  position: static;
  height: 65px;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const ReviewRegisterButton = styled.button`
  background: black;
  padding: 10px 15px;
  font-size: 1.5rem;
  color: white;
  border-radius: 50px;
  font-weight: bold;
`;
