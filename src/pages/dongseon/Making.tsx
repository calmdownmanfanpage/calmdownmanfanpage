import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../styles/contants';
import PageLeft from './components/PageLeft';
import PageRight from './components/PageRight';
import Page from './components/Page';
import Previous from './components/Previous';

export default function Making() {
    return (
      <>
        <StyledMain>

          {/* <Page></Page> */}
            <PageLeft></PageLeft>
            <PageRight></PageRight>
          
        </StyledMain>
      </>
    );
}

// pageSection
const StyledMain = styled.main`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: #e1e1e1;


  overflow: hidden;
  position: relative;
  perspective: 1000px;
`