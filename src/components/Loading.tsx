import styled from "styled-components";

export default function Loading() {
  return (
    <StyledContainer>
      <img src="/loading-dance.gif" alt="loading" />
      <p>전문 로딩팀이 로딩중 ...</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    @keyframes bounce {
      0% {
        transform: scale(1.1, 1.1);
      }
      50% {
        transform: scale(0.9, 0.9);
      }
      100% {
        transform: scale(1.1, 1.1);
      }
    }

    animation: bounce 2s infinite;
  }
`;
