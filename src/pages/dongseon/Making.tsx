import styled from 'styled-components';

import Page from './components/Page';
import Content from './components/Content';

export default function Making() {
  // const inner = `<img src="/src/pages/dongseon/img/snack.webp" class="sc-fsYfxw dKEGNP"><div class="sc-qZruQ eNNQUd"><div class="sc-jsEeA-d fbhFXt">추천: 100</div><div class="sc-kFCrIq eyelM">조회: 100</div><div class="sc-irLvoH uBOvC">2023.10.10</div></div>`;
    return (
      <>
        <StyledMain>

          <Page/>
          <Page/>
          
        </StyledMain>
      </>
    );
  }

  // pageSection
  const StyledMain = styled.main`
    width: 100%;
    height: calc(100% - 44px);
    background: #e1e1e1;


    overflow: hidden;

    position: relative;
    perspective: 1000px;
  `


// // page
//   const StyledSection = styled.section`
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;

//     box-shadow: 0 10px 5px lightgray;
//     text-align: center;

//     position: absolute;
//     top: 0;
//     left: 0;
//     margin-left: 50%;


//     transform-origin: left center;
//     transition-duration: 1s;
//     transition-timing-function: ease-in;
//     background: white;
//   `










  
//   const StyledImg = styled.img`
//     width: 10em;
//     height: 10em;
//     object-fit: cover;
//   `
//   const StyledInfo = styled.div`
    
//   `
//   const StyledRecommend = styled.div`
    
//   `
//   const StyledView = styled.div`
    
//   `
//   const StyledUploadDate = styled.div`
    
//   `