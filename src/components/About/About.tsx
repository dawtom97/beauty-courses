import React from 'react';
import CourseCard from '../common/CourseCard/CourseCard';
import * as Styled from './styles';
import bg from '../../assets/banner.png';
import arrow from '../../assets/course-bg.png';
import Image from 'next/image';
import aboutImg from '../../assets/about.png';
import {BsCheckCircleFill} from 'react-icons/bs'

const About = ({section}:any) => {
  return (
    <Styled.Wrapper bg={bg.src} arrow={arrow.src}>
      <Styled.Content>
        <Styled.Left>
          <img src={aboutImg.src}  />
        </Styled.Left>
        <Styled.Right>
          <span>{section?.badge}</span>

          <h2>{section?.title}</h2>

          <p>
            {section?.desc}
          </p>

          <p><BsCheckCircleFill/> Możliwość dofinansowania</p>
          <p><BsCheckCircleFill/> Doświadczeni trenerzy</p>
          <p><BsCheckCircleFill/> Bogata oferta</p>
        </Styled.Right>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default About;
