import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  background: #ffffff;
  border: 1px solid #e9ecef;
  box-shadow: -11.729px -11.729px 32px rgb(255 255 255 / 15%);
  border-radius: 10px;
  padding: 2.4rem;
  text-align: center;
  transition: 0.4s;

  & h3 {
    font-size: 1.8rem;
  }

  & p {
    color: #685f78;
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  cursor: pointer;
  &:hover {
    background-color: #2c1909;

    & p,
    & h3 {
      color: #fff;
    }
  }
`;

interface Props {
  bg: string;
}

const Circle = styled.div<Props>`
  height: 70px;
  border: 4px dashed ${({ bg }) => bg};
  position: relative;
  border-radius: 50%;
  width: 70px;
  margin: 1rem auto 2rem;

  &::before {
    position: absolute;
    content: '';
    width: 70%;
    height: 70%;
    background-color: ${({ bg }) => bg};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

const CategoryCard = ({ category }: any) => {
  const handleCoursesAmount = () => {
    if (category.courses.length < 1 || category.courses.length > 12) {
      return 'kursów';
    } else if (category.courses.length == 1) {
      return 'kurs';
    } else {
      return 'kursy';
    }
  };

  return (
    <Link href={`/kursy/${category.slug}`}>
      <Wrapper>
        <Circle bg={category.boxColor.hex} />
        <h3>{category.categoryName}</h3>
        <p>
          {category.courses.length} {handleCoursesAmount()}
        </p>
      </Wrapper>
    </Link>
  );
};

export default CategoryCard;
