import styled from 'styled-components';

interface Props {
  bg: string;
  arrow: string;
}

export const Wrapper = styled.div<Props>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 80%),
    url(${({ bg }) => bg});

  position: relative;
  margin-top: 5%;

  @media (max-width: 1600px) {
    margin-top: 3%;
  }

  @media (max-width: 1400px) {
    margin-top: initial;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    border-width: 3px;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  position: relative;
  z-index: 1;
  margin: 0 auto;

  display: flex;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }

  & h2 {
    font-size: 3rem;
  }

  & span {
    display: block;
    color: ${({ theme }) => theme.secondary};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 70%;
    margin-top: 1rem;
    margin-bottom: 3rem;

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  position: relative;
  min-height: 500px;
  @media (max-width: 992px) {
    min-height: initial;
  }

  & img {
    position: absolute;
    width: 100%;
    bottom: 0;
    @media (max-width: 992px) {
      position: initial;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 992px) {
    margin-top: 2rem;
  }

  & h2 {
    margin-bottom: 1rem;
  }

  & p {
    display: flex;
    align-items: center;
  }

  & svg {
    color: ${({ theme }) => theme.primary};
    margin-right: 1rem;
  }
`;
