import styled from 'styled-components';

export const Wrapper = styled.article`
  background-color: #fff;
  padding: 1.8rem;
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
  transition: 0.5s;
  border:1px solid #e9ecef;

  &:hover {
    background-color: #2c1909;

    & p,
    & h3 {
      color: #fff;
    }

    & span img {
      transform: scale(1.3);
    }
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  & span {
    width: 100% !important;
    max-width: initial !important;
  }
  & img {
    transition: 0.4s;
    min-height: 220px;
  }
`;

export const Badge = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 0.5rem 0.8rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 1px;
  border-radius: 30px;
  width: fit-content;
  margin: 1rem 0;
  color: #fff;
`;

export const Content = styled.div`
  & > h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    min-height: 45px;
    transition: 0.4s;
  }

  & button {
    margin-top: 1rem;
    border-width: 2px;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 1rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.4s;
  }
`;
