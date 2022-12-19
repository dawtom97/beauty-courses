import Link from 'next/link';
import React from 'react';
import * as Styled from './styles';
import {HiOutlineArrowLongRight} from 'react-icons/hi2'

interface ICategory {
  id: string;
  categoryName: string;
  categoryDesc:string;
  boxColor: {
    hex: string;
  };
};

const BannerCategoryBox = ({ boxColor, categoryName,categoryDesc }: ICategory) => {
  return (
    <Styled.Category boxColor={boxColor.hex}>
      <h3>{categoryName}</h3>
      <p>{categoryDesc}</p>
      <Link href="/">
        <a>zobacz <HiOutlineArrowLongRight/></a>
      </Link>
    </Styled.Category>
  );
};

export default BannerCategoryBox;
