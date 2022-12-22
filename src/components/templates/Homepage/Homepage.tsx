import React from 'react';
import Footer from '../../common/Footer/Footer';
import { Navbar } from '../../common/Navbar/Navbar';
import { HomepageProps } from './Homepage.types';
import * as Styled from './styles';
import bg from '../../../assets/banner.png'

const Homepage = ({ children,contact }: HomepageProps) => {
  return (
    <Styled.Wrapper bg={bg.src}>
      <Navbar />
      <Styled.Content>{children}</Styled.Content>
      <Footer contact={contact}/>
    </Styled.Wrapper>
  );
};

export default Homepage;
