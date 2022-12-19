import styled from 'styled-components';

export const Wrapper = styled.div`
position: relative;
  &::before {
    position: fixed;
    content: '';
    background-color:${({theme})=>theme.secondary};
    height: 100vh;
    width: 6%;
    top: 0px;
    left: 0px;
    z-index: -1;

    @media (max-width:992px) {
        display: none;
    }
  }
`;

export const Content = styled.div``;
