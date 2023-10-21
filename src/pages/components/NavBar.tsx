import styled from "styled-components";
import { Link } from "react-router-dom";
import { HEADER_MAX_WIDTH } from "../../styles/contants";
const NavBar = () => {
  return (
    <Navbar>
      <div>
        <StyledLink to="/dahyeon">
          <h2>채팅 앱</h2>
        </StyledLink>
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: #c1bdbd;
  padding: 10px 0;
  div {
    width: 100vw;
    max-width: ${HEADER_MAX_WIDTH}px;
    @media screen and (min-width: 834px) {
      min-width: 834px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  height: 100%;
  h2 {
    font-size: 2rem;
    color: gray;
    font-weight: bold;
  }
`;

export default NavBar;
