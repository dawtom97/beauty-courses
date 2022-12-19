import React from 'react';
import banner from '../../assets/banner1.png';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import * as Styled from './styles';
import { Button } from '../common/Button/Button';

const Banner = () => {

  return (
    <Styled.Wrapper>
      <Styled.BannerContent>
        <div>
          <h1><span>SZKOLENIA</span> <br /> BEAUTY</h1>
          {/* <h3>LOREM IPSUM DOLOR SIT EMET</h3> */}
          <p>
            Bibendum hac sed duis sed condimentum. Risus ultricies pellentesque erat massa. Felis
            magna amet integer scelerisque. Massa nunc molestie arcu metus, in faucibus fames hac
            arcu. Verra non amet ultrices eu elementum convallis
          </p>
          <Styled.ButtonsWrapper>
            <Button>
              CONTACT ME <BiRightArrow />
            </Button>
            <Button>
              <BiDownArrow />
            </Button>
          </Styled.ButtonsWrapper>
        </div>
      </Styled.BannerContent>

      <Styled.Banner banner={banner}>
        <Styled.ScrollToContact>
          <a>
            Formularz <BiRightArrow />
          </a>
        </Styled.ScrollToContact>
      </Styled.Banner>
    </Styled.Wrapper>
  );
};

export default Banner;
