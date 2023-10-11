import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../styles/contants';
import Page from './components/Page';

export default function Making() {
    return (
      <>
        <StyledMain>

          <Page></Page>
          
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

  display: flex;
  align-items: center;
  justify-content: center;
`