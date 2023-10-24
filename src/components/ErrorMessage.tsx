import styled from "styled-components";

export default function ErrorMessage({ message }: { message?: string }) {
  return (
    <StyledContainer>
      <img src="/error-confused.gif" alt="error" />
      <p>오류가 발생했습니다.</p>
      {message ? <p>{message}</p> : null}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
