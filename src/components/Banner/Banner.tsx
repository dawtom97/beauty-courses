import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/banner.png';
import { Button } from '../common/Button/Button';
import { IoArrowDownCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import banner from '../../assets/banner1.png';
import { AiFillStar } from 'react-icons/ai';

interface Props {
  bg: string;
}

const Wrapper = styled.div<Props>`
  background-image: url(${({ bg }) => bg});
  padding: 18rem 0 7rem;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  display: flex;
  margin: 0 auto;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
  & > span {
    color: ${({ theme }) => theme.secondary};
    font-size: 2rem;
    margin-bottom: 2.5rem;
    display: block;
    font-weight: 500;
  }

  & h1 {
    font-weight: 700;
    font-size: 4.8rem;
    margin-bottom: 4rem;
    line-height: 1.2;
    max-width: 500px;
  }

  & > div {
    display: flex;
    gap: 3rem;
  }

  & p {
    font-weight: 500;
    font-size: 1.8rem;

    margin-bottom: 4.8rem;
  }
  & button {
    position: relative;
    width: 70%;
    height: 60px;
    max-width: initial;
    border-width: 3px;
    margin-bottom: 4.8rem;
    //  background-color: ${({ theme }) => theme.primary};

    & svg {
      position: absolute;
      right: 0;
      font-size: 5rem;
      margin-left: 5px;
    }
  }
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.4rem !important;
  & span {
    display: block;
    font-size: 6rem;
    color: #000;
    font-weight: 700;
    margin-right: 1rem;
  }

  & svg {
    font-size: 2rem;
    margin-right: 1rem;
    color:#FFB54A;
  }
`;

const Banner = ({section}:any) => {
  return (
    <Wrapper bg={bg.src}>
      <Content>
        <Left>
          <span>{section?.badge}</span>
          <h1>{section?.title}</h1>
          <p>{section?.desc}</p>
          <Link href='#Search'>
            <Button>
              ROZPOCZNIJ <IoArrowDownCircleSharp />
            </Button>
          </Link>
          <p>{section?.desc2}</p>
          <div>
            <Rating>
              <span>400+</span>
            </Rating>
            <Rating>
              <span>4.6</span> <AiFillStar /> <AiFillStar />
              <AiFillStar /> <AiFillStar /> <AiFillStar />
            </Rating>
          </div>
        </Left>
        <Right>
          <Image src={banner.src} layout='fill' objectFit='contain' />
        </Right>
      </Content>
    </Wrapper>
  );
};

export default Banner;
