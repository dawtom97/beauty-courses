import React from 'react';
import CourseCard from '../common/CourseCard/CourseCard';
import * as Styled from './styles';
import bg from '../../assets/banner.png';
import arrow from '../../assets/course-bg.png';
import { Button } from '../common/Button/Button';
import Link from 'next/link';

const Featured = ({ courses }: any) => {
  return (
    <Styled.Wrapper bg={bg.src} arrow={arrow.src}>
      <Styled.Content>
        <span>Co nowego?</span>
        <Styled.Top>
          <h2>Najnowsze kursy</h2>
          <Button>
            <Link href='/kursy'>
              Wszystkie
            </Link>
          </Button>
        </Styled.Top>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum
          gravida maecenas augue elementum et neque. Suspendisse imperdiet.
        </p>
        <div>
          {courses.map((course: any) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Featured;
