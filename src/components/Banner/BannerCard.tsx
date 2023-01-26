import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 25px;
  position: relative;
  flex: 1;
  background: #fff;
  gap: 1rem;
  border: 1px solid #e9ecef;
  box-shadow: -11.729px -11.729px 32px rgb(255 255 255 / 15%);
  transition: 0.4s;

  &:hover {
    transform: translateY(-30px);
  }

  & span {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  & p {
    font-size: 1.8rem;
  }
`;

const BannerCard = ({ icon, amount, text }: any) => {
  return (
    <Wrapper>
      <Image alt="ikonka" src={icon} width={80} height={80} />
      <div>
        <span>{amount}</span>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default BannerCard;
