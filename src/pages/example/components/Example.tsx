import styled from "styled-components";
import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <StyledContainer>예시입니다</StyledContainer>
      <button onClick={handleClick}>클릭 횟수: {count}</button>
    </>
  );
}

const StyledContainer = styled.div`
  color: blue;
`;
