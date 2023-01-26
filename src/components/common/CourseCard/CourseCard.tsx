import Image from 'next/image';
import React from 'react';
import { imageLoader } from '../../../utils/imageLoader';
import IconWithText from '../IconWithText/IconWithText';
import * as Styled from './styles';
import iconClock from '../../../assets/iconalt_duration.svg';
import iconVacancies from '../../../assets/icon_people.svg';
import iconLevel from '../../../assets/iconalt_level.svg';
import Link from 'next/link';
import { Button } from '../Button/Button';

const CourseCard = ({ course }: any) => {

  return (
    <Styled.Wrapper>
      <Link href={`/kursy/${course.categories[0].slug}/${course.slug}`}>
        <a>
          <Styled.ImageBox>
            <Image
              alt={course.title}
              loader={imageLoader}
              src={course.thumbnail.url}
              width={300}
              height={220}
              objectFit='cover'
            />
          </Styled.ImageBox>
          <Styled.Content>
            <Styled.Top>
              <p>{course.isRemote === true ? 'Zdalne' : course.city}</p>
              <Styled.Badge>{course.categories[0].categoryName}</Styled.Badge>
            </Styled.Top>
            <h3>{course.title.length > 40 ? course.title.slice(0,40) + '...' : course.title}</h3>
            <Styled.Icons>
              <IconWithText icon={iconClock} text={`${course.duration} godzin`} />
              <IconWithText icon={iconVacancies} text={`${course.vacancies} miejsc`} />
            </Styled.Icons>
            <IconWithText icon={iconLevel} text={`${course.level}`} />
            <Button>Zobacz</Button>
          </Styled.Content>
        </a>
      </Link>
    </Styled.Wrapper>
  );
};

export default CourseCard;
