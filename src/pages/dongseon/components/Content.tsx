import styled from 'styled-components';
import snack from '../img/snack.webp';

export default function Content() {
    return (
      <>
      <Wrapper>
        <StyledImg src={snack}/>
        <StyledInfo>
            <StyledRecommend>추천: 100</StyledRecommend>
            <StyledView>조회: 100</StyledView>
            <StyledUploadDate>2023.10.10</StyledUploadDate>
        </StyledInfo>
        </Wrapper>
      </>
    );
  }


const Wrapper = styled.div`
  &.hidden{
    display: none;
  }
`
  
  const StyledImg = styled.img`
    width: 10em;
    height: 10em;
    object-fit: cover;
  `
  const StyledInfo = styled.div`
    
  `
  const StyledRecommend = styled.div`
    
  `
  const StyledView = styled.div`
    
  `
  const StyledUploadDate = styled.div`
    
  `