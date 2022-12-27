import React from 'react';
import CategoryCard from '../common/CategoryCard/CategoryCard';
import * as Styled from './styles';
import arrow from '../../assets/course-bg.png';

const Categories = ({ categories, section }: any) => {
  return (
    <Styled.Wrapper arrow={arrow.src}>
      <Styled.Content>
        <span>{section?.badge}</span>

        <h2>{section?.title}</h2>

        <p>{section?.desc}</p>
        <div>
          {categories.map((category: any) => (
            <CategoryCard category={category} key={category.categoryName} />
          ))}
        </div>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Categories;
