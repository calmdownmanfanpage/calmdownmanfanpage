import styled from "styled-components";

export default function LOL() {
  return (
    <>
      <LOLDiv>롤</LOLDiv>
    </>
  );
}

const LOLDiv = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: orange;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;
