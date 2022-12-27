import React from 'react';
import CourseCard from '../common/CourseCard/CourseCard';
import * as Styled from './styles';
import bg from '../../assets/banner.png';
import arrow from '../../assets/course-bg.png';
import { Button } from '../common/Button/Button';
import Link from 'next/link';

const Featured = ({ courses, section }: any) => {
  return (
    <Styled.Wrapper id='Featured' bg={bg.src} arrow={arrow.src}>
      <Styled.Content>
        <span>{section?.badge}</span>
        <Styled.Top>
          <h2>{section?.title}</h2>
          <Button>
            <Link href='/kursy'>Wszystkie</Link>
          </Button>
        </Styled.Top>

        <p>{section?.desc}</p>
        <Styled.Cards>
          {courses.map((course: any) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Styled.Cards>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Featured;
