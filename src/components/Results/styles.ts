import styled from 'styled-components';

interface Props {
  arrow: string;
}

// linear-gradient(rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 80%)

export const Wrapper = styled.div<Props>`
  padding: 7rem 0;
  position: relative;
  background-color: #fafafa;
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

export const Cards = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  position: relative;
  z-index: 1;
  margin: 0 auto;

  & > ul {
    display: flex;
    list-style: none;
    justify-content: center;
    font-size: 1.4rem;
    margin: 30px auto;
    li {
      width: fit-content;
      min-width: 50px;
      margin: 2px;
      padding: 0.5rem;
      cursor: pointer;
      text-align: center;
      color: ${(props) => props.theme.text};
      border: 1px solid #e9ecef;
      background-color: #fff;
      transition: 0.4s;
      &:hover {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.body};
      }
      &.selected {
        background-color: ${(props) => props.theme.primary};
        border-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.body};
      }
      a {
        color: inherit;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    li:first-of-type,
    li:last-of-type {
      width: 80px;
    }
  }

  & h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
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
    margin-bottom: 1rem;

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
`;

export const NotFound = styled.div`
  text-align: center;
  margin: 3rem 0;

  & button {
    margin: 3rem auto;
    color: white;
    cursor: pointer;
    height: 50px;
    background: #f66962;
    max-width: initial;
    width: 300px;
  }
`;
