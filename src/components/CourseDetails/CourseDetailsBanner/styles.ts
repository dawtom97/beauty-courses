import styled from 'styled-components';

interface Props {
  banner: string;
}

export const Wrapper = styled.div<Props>`
  position: relative;
  /* background-color: ${({ theme }) => theme.secondary}; */
  background-image: url(${({ banner }) => banner});
  background-position: center;
  padding: 20rem 0 4rem;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.63);
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  position: relative;
  color: #fff;
  margin: 0 auto;

  & > div {
    width: 60%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BannerMiddle = styled.div`
  margin: 2rem 0;
  & > h2 {
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }

  & > h3 {
    font-size: 1.4rem;
    font-weight: 300;
    width: 80%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;
export const BannerBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Badge = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 0.7rem 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 1px;
  border-radius: 30px;
`;
