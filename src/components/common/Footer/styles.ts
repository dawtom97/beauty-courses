import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: #fff;
  margin-top: 5rem;
  padding: 5rem 0 3rem;
`;

export const InnerWrapper = styled.div`
  max-width: 1444px;
  width: 90%;
  margin: 0 auto;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const IconBox = styled.div`
  & p {
    width: 90%;
    margin-top: 1rem;
  }
`;

export const ContentBox = styled.div`
  & span {
    color: #0a142f;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 26px;
    text-transform: capitalize;
    display: block;
    margin-bottom: 2rem;
  }

  & ul {
    list-style: none;
  }
  & li {
    margin: 1.4rem 0;
  }

  & p {
    margin: 1.4rem 0;
  }
`;

export const Copyright = styled.div`
  max-width: 1444px;
  width: 90%;
  margin: 0 auto;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
  }

  & div {
    display: flex;
    gap: 1rem;
  }
`;
