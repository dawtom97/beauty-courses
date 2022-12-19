import React from 'react';
import { AllCategoriesProps } from '../../../types/AllCategories.types';
import BannerCategoryBox from '../BannerCategoryBox.tsx/BannerCategoryBox';
import * as Styled from './styles';

interface IBannerCategory {
  categories: AllCategoriesProps[];
}

const BannerCategoryList = ({ categories }: IBannerCategory) => {
  return (
    <Styled.Wrapper>
      {categories.map((category: AllCategoriesProps) => (
        <BannerCategoryBox key={category.id} {...category} />
      ))}
    </Styled.Wrapper>
  );
};

export default BannerCategoryList;
