import React from 'react';
import { Navbar } from '../../common/Navbar/Navbar';
import { HomepageProps } from './Homepage.types';
import * as Styled from './styles';

const Homepage = ({ children }: HomepageProps) => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
};

export default Homepage;
