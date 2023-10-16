import styled from "styled-components";

export default function HOS() {
  return (
    <>
      <HOSDiv>히오스</HOSDiv>
    </>
  );
}

const HOSDiv = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: green;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;
