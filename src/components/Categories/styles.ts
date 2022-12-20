import styled from 'styled-components';

interface Props {
  arrow: string;
}

export const Wrapper = styled.div<Props>`
  padding: 7rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${({ arrow }) => arrow});
    width: 100%;
    height: 100%;
    bottom: 0%;
    right: 0;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    z-index: 0;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 2.4rem;

    @media (max-width:768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:576px) {
        grid-template-columns: 1fr;
    }
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

  & > p {
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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    border-width: 3px;
  }
`;
