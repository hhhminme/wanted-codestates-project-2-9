import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function GlobalNavigation() {
  return (
    <S.NavBlock>
      <S.NavContainer>
        <Link to="/">
          <S.Logo src="https://i.balaan.io/mobile/img/icon/ico_logo.png" />
        </Link>
        {window.location.pathname !== "/register" && (
          <Link to="/register">
            <S.ReviewRegisterButton>리뷰 등록</S.ReviewRegisterButton>
          </Link>
        )}
      </S.NavContainer>
    </S.NavBlock>
  );
}

export default GlobalNavigation;
