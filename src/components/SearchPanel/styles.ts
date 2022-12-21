import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 7rem 0;
  position: relative;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  position: relative;
  z-index: 1;
  margin: 0 auto;

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


export const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3,1fr);
`

export const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  border-right: 1px solid #e9ecef;

  & label {
    display: block;
    color: #8f7bf0;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  & select {
    border: none;
    font-weight: 700;
    margin-left: -4px;
    font-size: 1.8rem;
    cursor: pointer;
    outline: none;


  }
`