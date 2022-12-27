import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/banner.png';

interface Props {
  bg: string;
}

const Wrapper = styled.div<Props>`
  background-image: url(${({ bg }) => bg});
  padding: 18rem 0 7rem;
  position: relative;

  @media (max-width: 1200px) {
    padding: 18rem 0 7rem;
  }
  @media (max-width: 992px) {
    padding: 12rem 0 7rem;
  }
`;

const Content = styled.div`
  width: 90%;
  max-width: 1444px;
  margin: 0 auto;
  text-align: center;
  & h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  & p {
    font-size: 2rem;
  }
`;

const BannerResults = ({ searchSuccess }: any) => {
  return (
    <Wrapper bg={bg.src}>
      <Content>
        <h2>{searchSuccess ? 'Wyniki wyszukiwania' : 'Niedobrze...'}</h2>
        <p>
          {searchSuccess
            ? 'Świetnie! Oto co udało nam się znaleźć'
            : 'Wygląda na to, że nie mamy żadnego kursu o wskazanych parametrach'}
        </p>
      </Content>
    </Wrapper>
  );
};

export default BannerResults;
