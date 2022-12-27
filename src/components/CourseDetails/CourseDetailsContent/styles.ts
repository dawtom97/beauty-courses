import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1444px;
  width: 90%;
  position: relative;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 6rem;
  display: grid;
  column-gap: 2.4rem;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Overview = styled.div`
  & > div {
    background-color: #fff;
    padding: 1.8rem;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    margin-bottom: 2.4rem;
    & h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.black};
      margin-bottom: 2rem;
    }
    & h6 {
      font-weight: 600;
      font-size: 1.4rem;
      color: #0b0b0b;
      margin-bottom: 20px;
    }
  }
`;

export const InnerHTML = styled.div`
  & p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  & li {
    font-size: 1.4rem;
  }
  & ul {
    display: inline-block;
    margin-bottom: 2rem;
    width: 45%;
    margin-left: 1.8rem;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const Aside = styled.aside`
  margin-top: -275px;
  @media (max-width: 992px) {
    margin-top: 0;
  }
`;

export const AsideBox = styled.div`
  background-color: #fff;
  position: relative;
  padding: 1.8rem;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  margin-bottom: 2.4rem;

  & > button {
    width: 100%;
    max-width: 100%;
    margin-top: 1.4rem;
    padding: 1.6rem 0;
    background-color: ${({ theme }) => theme.secondary};
    border: none;
    font-weight: 700;
    color: #fff;
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }
  }

  & h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.black};
    margin-bottom: 2rem;
  }
  & p {
    margin: 1.4rem 0;
  }
`;

export const ImageWrapper = styled.div`
  height: 170px;
  max-height: 170px;
  position: relative;
`;
export const Price = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  align-items: center;
  font-weight: 700;
  margin: 1.6rem 0;
  color: ${({ theme }) => theme.black};

  & span {
    // color: ${({ theme }) => theme.secondary};
    font-size: 2.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.2rem;

  & button {
    flex: 1;
    font-weight: 700;
  }
`;
export const Dropdowns = styled.div``;

export const FormBox = styled.div`
  & > form {
    & > div {
      display: flex;
      gap: 2rem;

      & div {
        flex: 1;
      }
    }
  }

  & button {
    font-weight: 700;
    color: #392c7d;
    border-radius: 50px;
    padding: 9px 15px;
    min-width: 150px;
    cursor: pointer;
    background-color: transparent;
    border: 4px solid ${({ theme }) => theme.secondary};
    margin-top: 1rem;
    transition: 0.4s;

    &:hover {
      background-image: none;
      color: #fff;
      background-color: ${({ theme }) => theme.secondary};
    }
  }

  & input,
  & textarea {
    background: rgba(229, 229, 229, 0.42);
    border-color: #dce0eb;
    color: #26292c;
    font-size: 15px;
    margin: 1rem 0;
    min-height: 42px;
    padding: 6px 15px;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
      font-size: 1.4rem;
    }
  }

  & textarea {
    margin-top: 2rem;
    resize: vertical;
    font-size: 1.4rem;
  }
`;
