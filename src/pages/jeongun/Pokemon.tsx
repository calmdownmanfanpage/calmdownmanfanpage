import styled from "styled-components";

export default function Pokemon() {
  return (
    <>
      <PokemonDiv>포켓몬</PokemonDiv>
    </>
  );
}

const PokemonDiv = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: purple;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;
