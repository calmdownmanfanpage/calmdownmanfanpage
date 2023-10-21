import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { NavBar } from "../components";

function Chat() {
  return (
    <>
      <NavBar />
      <Container className="text-secondary">
        <Wrap>
          <span>채팅창입니다</span>
        </Wrap>
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 50px);
  background-color: #f5f5f0;
`;

const Wrap = styled.div`
  border: 1px solid red;
  max-width: 60%;
  margin: auto;
  height: 100%;
`;

export default Chat;
