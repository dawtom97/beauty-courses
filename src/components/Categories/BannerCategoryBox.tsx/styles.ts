import styled from 'styled-components';

interface StylesProps {
  boxColor: string;
}

export const Category = styled.article<StylesProps>`
  background-color: ${({ boxColor }) => boxColor};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5px 10px 5px 0;
  flex-direction: column;
  padding: 3rem;
  color: #fff;
  @media (max-width: 1200px) {
      padding: 1.4rem;
    }
  & > h3 {
    letter-spacing: 1px;
    font-weight: 500;
    min-height: 75px;
    font-size: 3rem;
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
  }

  & > p {
    font-weight: 300;
    font-size: 1.2rem;

    margin-bottom: 30px;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  & a {
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    & svg {
      font-size: 2rem;
    }
  }
`;
