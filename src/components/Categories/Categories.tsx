import React from 'react';
import { AllCategoriesProps } from '../../types/AllCategories.types';
import BannerCategoryList from './BannerCategoryList/BannerCategoryList';
import * as Styled from './styles';

interface ICategories {
    categories: AllCategoriesProps[];
  }

const Categories = ({categories}:ICategories) => {
  return (
    <Styled.Wrapper>
        <hr/>
        <h2>Kategorie kursów</h2>
        <h3>Zobacz kursy z danej kategorii</h3>
        <BannerCategoryList categories={categories}/>
    </Styled.Wrapper>
  )
}

export default Categories;