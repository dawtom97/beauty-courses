import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);

  @media (max-width:1400px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: 992px) {
      width: 100%;
  }
  @media (max-width:576px) {
    grid-template-columns: repeat(1,1fr);
  }

`;
