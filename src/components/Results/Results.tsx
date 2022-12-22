import React from 'react';
import CourseCard from '../common/CourseCard/CourseCard';
import * as Styled from './styles';
import arrow from '../../assets/course-bg.png';
import notFound from '../../assets/not_found.png';
import Image from 'next/image';
import { Button } from '../common/Button/Button';
import Link from 'next/link';

const Results = ({ courses }: any) => {
  const handleCoursesAmount = () => {
    if (courses.length < 1 || courses.length > 12) {
      return 'kursów';
    } else if (courses.length == 1) {
      return 'kurs';
    } else {
      return 'kursy';
    }
  };

  return (
    <Styled.Wrapper id='Featured' arrow={arrow.src}>
      <Styled.Content>
        {courses.length ? (
          <>
            <span>Całkiem nieźle</span>

            <h2>
              Znaleziono {courses.length} {handleCoursesAmount()} o wskazanych parametrach
            </h2>
            <Styled.Cards>
              {courses.map((course: any) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </Styled.Cards>
          </>
        ) : (
          <>
            <Styled.NotFound>
            <span>Bez paniki</span>
            <h2>Wkrótce na pewno pojawi się kurs, którego szukasz</h2>
            <Image src={notFound.src} width={400} height={200} objectFit={'contain'} />
            <Link href="/#Search">
            <Button>Szukaj dalej</Button>
            </Link>
            </Styled.NotFound>
          
          </>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Results;
