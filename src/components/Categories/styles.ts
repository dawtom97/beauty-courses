import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 2% 50px 8%;
    width: 65%;

   & h2 {
    font-size: 4rem;
    margin-left: -4px;
   }
   & hr {
    margin-bottom: 2rem;
   }

   & > h3 {
    /* color: ${({theme})=>theme.secondary}; */
    text-transform: uppercase;
    margin-bottom: 3rem;
   }

  @media (max-width: 992px) {
    padding: 50px 30px;
    width: 100%;
  }
`;
