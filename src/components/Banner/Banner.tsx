import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/banner.png';
import { Button } from '../common/Button/Button';
import { IoArrowDownCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import banner from '../../assets/banner1.png';
import { AiFillStar } from 'react-icons/ai';
import gratuateIcon from '../../assets/gratuate-icon.svg';
import certificateIcon from '../../assets/certificate-icon.svg';
import courseIcon from '../../assets/course-icon.svg';
import pencilIcon from '../../assets/pencil-icon.svg';
import BannerCard from './BannerCard';

interface Props {
  bg: string;
}

const Wrapper = styled.div<Props>`
  background-image: url(${({ bg }) => bg});
  padding: 18rem 0 13rem;
  position: relative;

  @media (max-width: 1200px) {
    padding: 18rem 0 7rem;
  }
  @media (max-width: 992px) {
    padding: 12rem 0 7rem;
  }
`;

const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  display: flex;
  margin: 0 auto;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

const ContentBottom = styled.div`
  width: 90%;
  max-width: 1444px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  gap: 2rem;
  bottom: -125px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    left: 0;
    bottom: initial;
    transform: initial;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 992px) {
    min-height: 300px;
    margin-bottom: 3rem;
  }
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
    @media (max-width: 768px) {
      font-size: 3.4rem;
    }
    @media (max-width: 992px) {
      max-width: initial;
    }
  }

  & > div {
    display: flex;
    gap: 3rem;
    @media (max-width: 576px) {
      flex-direction: column;
    }
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
    color: #ffb54a;
  }
`;

const Banner = ({ section,info }: any) => {
  console.log(info)
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
              <span>{info?.ratingAmount}+</span>
            </Rating>
            <Rating>
              <span>{info?.rating}</span> <AiFillStar /> <AiFillStar />
              <AiFillStar /> <AiFillStar /> <AiFillStar />
            </Rating>
          </div>
        </Left>
        <Right>
          <Image src={banner.src} layout='fill' alt="banner" objectFit='contain' />
        </Right>
      </Content>
      <ContentBottom>
        <BannerCard amount={`${info?.coursesAmount}+`} text='Trwające kursy' icon={pencilIcon.src} />
        <BannerCard amount={`${info?.trainers}+`} text='Trenerów' icon={gratuateIcon.src} />
        <BannerCard amount={`${info?.expYears}+`} text='Lata doświadczenia' icon={certificateIcon.src} />
        <BannerCard amount={`${info?.students}+`} text='Kursantów' icon={gratuateIcon.src} />
      </ContentBottom>
    </Wrapper>
  );
};

export default Banner;
