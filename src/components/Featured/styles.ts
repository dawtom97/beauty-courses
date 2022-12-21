import styled from 'styled-components';

interface Props {
  bg: string;
  arrow: string;
}


// linear-gradient(rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 80%)

export const Wrapper = styled.div<Props>`
  background-image: url(${({ bg }) => bg});

  padding: 7rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${({ arrow }) => arrow});
    width: 100%;
    height: 100%;
    top: 0;
    background-repeat: no-repeat;
    z-index: 0;
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
  & > div {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
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
