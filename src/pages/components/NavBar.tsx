import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <StyledLink to="/dahyeon">
        <h2>채팅 앱</h2>
      </StyledLink>
      <ul>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/login">회원가입</Link>
        </li>
      </ul>
    </Navbar>
  );
};

const Navbar = styled.nav`
  ${({ theme }) => {
    return css`
      border: 1px solid red;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      background-color: #d1d1d1;
    `;
  }}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => {
    return css`
      border: 1px solid red;
      display: inline-block;
      height: 100%;
      h2 {
        font-size: 2rem;
        color: gray;
        font-weight: bold;
      }
    `;
  }}
`;
export default NavBar;
