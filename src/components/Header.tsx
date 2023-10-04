import { Link } from "react-router-dom";
import styled from "styled-components";
import { path } from "../pages/router";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLink to={path.root}>홈</StyledLink>
        <StyledLink to={path.example}>예시 페이지</StyledLink>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;
`;
