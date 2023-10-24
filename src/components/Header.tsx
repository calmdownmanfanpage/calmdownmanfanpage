import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { path } from "../pages/router";
import { useContext, useState } from "react";
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from "../styles/contants";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenMenu = () => setIsOpened(!isOpened);

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledImageLink to={path.root} />
          <StyledMenuWrapper isOpened={isOpened}>
            <StyledLink to={path.dongseon}>동선</StyledLink>
            <StyledLink to={path.games}>정운</StyledLink>
            <StyledLink to={path.dahyeon}>다현</StyledLink>
            <StyledLink to={path.meme}>모든 밈들의 신</StyledLink>
          </StyledMenuWrapper>
          {/* 유저 정보가 있을 때 */}
          {user && (
            <StyledAuthBox>
              <span>{user?.name} 님</span>
              <Link onClick={logoutUser} to={path.login}>
                로그아웃
              </Link>
            </StyledAuthBox>
          )}

          {/* 유저 정보가 없을 때 */}
          {!user && (
            <StyledAuthBox>
              <Link to={path.login}>로그인</Link>
              <Link to={path.register}>회원가입</Link>
            </StyledAuthBox>
          )}

          <StyledMenuButton onClick={handleOpenMenu} />
        </StyledContainer>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: ${HEADER_HEIGHT}px;
  background-color: #f5f5f7;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-width: ${HEADER_MAX_WIDTH}px;
  @media screen and (min-width: 834px) {
    min-width: 834px;
  }
`;

const StyledMenuWrapper = styled.div<{ isOpened: boolean }>`
  display: flex;
  width: 100%;
  background-color: #f5f5f7;
  font-size: 12px;
  transition: all 0.5s;
  @media screen and (max-width: 834px) {
    ${({ isOpened }) => {
      return isOpened
        ? css`
            opacity: 1;
            pointer-events: auto;
          `
        : css`
            opacity: 0;
            pointer-events: none;
          `;
    }};
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: ${HEADER_HEIGHT}px;
    left: 0;
  }
`;

const StyledImageLink = styled(Link)`
  background-image: url("icon_home.png");
  width: ${HEADER_HEIGHT}px;
  height: ${HEADER_HEIGHT}px;
  padding: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  width: 100%;
  text-decoration: none;
  color: #00000090;
  text-align: center;
  line-height: ${HEADER_HEIGHT - 20}px;
  &:hover {
    color: black;
  }
`;

const StyledMenuButton = styled.button`
  background-image: url("icon_menu.png");
  width: ${HEADER_HEIGHT}px;
  height: ${HEADER_HEIGHT}px;
  padding: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-origin: content-box;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 9;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 834px) {
    display: none;
  }
`;

const StyledAuthBox = styled.div`
  width: 12.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: bold;
    cursor: pointer;
  }
  a {
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    padding: 7px 14px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  }
`;
