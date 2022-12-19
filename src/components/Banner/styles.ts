import styled from 'styled-components';
import { StylesProps } from './Banner.types';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const Banner = styled.main<StylesProps>`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.4) 80%),
    url(${({ banner }) => banner.src});
  background-size: cover;
  width: 35%;
  background-position: center;
  display: flex;
  box-shadow: 0px 0px 8px black;
  position: fixed;
  right: 0;
  align-items: flex-end;
  padding: 5rem;
  @media (max-width: 992px) {
    width: 100%;
    min-height: 60vh;
    position: initial;
    background-position: center;
  }
`;

export const BannerContent = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 0 8%;
  justify-content: center;
  @media (max-width: 992px) {
    width: 100%;
    padding: 50px 30px;
  }

  &  h1 {
    font-size: 8rem;
    letter-spacing: 5px;
    margin-left: -6px;

    & span {
      color: ${({theme})=>theme.secondary};
    }

    @media (max-width: 992px) {
      font-size: 5rem;
    }
  }

  & h3 {
    /* color: ${({theme})=>theme.secondary}; */
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &  p {
    font-weight: 300;
    font-size: 1.8em;
    width: 100%;
    letter-spacing: 1px;
    @media (max-width: 992px) {
      width: 90%;
  }
  }

  & a {
    text-decoration: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 10px;
    cursor: pointer;

    & svg {
      font-size: 2rem;
    }
  }
`;
export const ScrollToContact = styled.div`
  background-color: transparent;
  position: fixed;
  right: -30px;
  bottom: 130px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 50px;
  width: 280px;
  height: 100px;
  border: 4px solid white;
  transform: rotate(90deg);
  cursor: pointer;
  transition: 0.4s;
  @media (max-width: 1200px) {
    display: none;
  }

  &:hover {
    background-color: #fff;
    color: #363537;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  & button {
    color: ${({ theme }) => theme.text};
    border: 1px solid #e0e1e2;
  }

  & button:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  & button:nth-child(2) {
    padding: 0;
    width: 60px;
    height: 60px;
    font-size: 28px;
    text-align: center;
    line-height: 70px;
    & svg {
      margin-left: 0;
      animation: jump 1.2s infinite alternate;
    }
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
  }

  @keyframes jump {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;