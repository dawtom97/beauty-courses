import React from 'react';
import * as Styled from './styles';
import iconBook from '../../../assets/icon_book.svg';
import iconClock from '../../../assets/icon_time.svg';
import iconPeople from '../../../assets/icon_people.svg'
import IconWithText from '../../common/IconWithText/IconWithText';

const CourseDetailsBanner = ({categories,city,duration,vacancies,shortDesc,title,isRemote}:any) => {
  return (
    <Styled.Wrapper banner={categories[0].categoryImage?.url}>
      <Styled.Content>
        <Styled.BannerTop>
          <Styled.Badge>{categories[0].categoryName}</Styled.Badge>
        </Styled.BannerTop>
        <Styled.BannerMiddle>
           <h2>{title}</h2>
           <h3>{shortDesc}</h3>
        </Styled.BannerMiddle>
        <Styled.BannerBottom>
          <IconWithText icon={iconBook} text={isRemote ? 'Zdalne' : city}/>
          <IconWithText icon={iconClock} text={`${duration}h`}/>
          <IconWithText icon={iconPeople} text={`${vacancies} miejsc`}/>
        </Styled.BannerBottom>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CourseDetailsBanner;
