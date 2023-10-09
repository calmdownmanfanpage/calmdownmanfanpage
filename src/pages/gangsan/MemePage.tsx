import styled from "styled-components";
import MemeContainer from "./components/MemeContainer";
import dummyData from "./dummy/memes.json";

export default function MemePage() {
  const data = dummyData.data;

  return (
    <StyledContainer>
      <StyledWrapper>
        <MemeContainer memes={data} />
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  max-width: 980px;
`;
