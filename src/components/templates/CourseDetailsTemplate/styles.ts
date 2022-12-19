import styled from 'styled-components';

interface Props {
  banner: {
    src:string
  }
}

export const Wrapper = styled.div`
  background-color: ${({theme})=>theme.gray};
`;

export const Content = styled.div``;

export const Banner = styled.div<Props>`
 height: 170px;
 background-image: url(${({banner})=>banner.src})
`