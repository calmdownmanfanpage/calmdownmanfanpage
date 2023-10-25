import styled from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { Link } from "react-router-dom";
import { path } from "../router";
import { Fragment } from "react";

export default function MainPage() {
  return (
    <>
      <main>
        <StyledContainer>
          {[
            { path: path.meme, src: "/banner-meme.png" },
            { path: path.games, src: "/banner-game.png" },
            { path: path.dongseon, src: "/banner-phrase.png" },
            { path: path.dahyeon, src: "/banner-chat.png" },
          ].map(({ path, src }, i) => (
            <Fragment key={src + i}>
              <StyledLink to={path}>
                <img src={src} alt={src} />
              </StyledLink>
            </Fragment>
          ))}
        </StyledContainer>
      </main>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const StyledLink = styled(Link)`
  height: 20%;

  & > img {
    border-radius: 3px;
    height: 100%;
    transition-duration: 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
