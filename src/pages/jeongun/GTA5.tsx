import styled from "styled-components";

export default function GTA5() {
  return (
    <>
      <GTADiv>GTA5</GTADiv>
    </>
  );
}

const GTADiv = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: blue;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;
