import React from 'react';
import * as Styled from './styles';
import logo from '../../../assets/logo.svg';
import Image from 'next/image';
import iconLocation from '../../../assets/icon_location.svg';
import iconEmail from '../../../assets/iconMessage.svg';
import iconPhone from '../../../assets/icon_phone.svg';
import IconWithText from '../IconWithText/IconWithText';

const Footer = ({contact}:any) => {
  return (
    <Styled.Wrapper id="Contact">
      <Styled.InnerWrapper>
        <Styled.IconBox>
          <Image src={logo.src} width={120} height={30} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut consequat mauris
          </p>
        </Styled.IconBox>
        <Styled.ContentBox>
          <span>Dla instruktorów</span>
          <ul>
            <li>Profil</li>
            <li>Login</li>
            <li>Rejestracja</li>
            <li>Panel</li>
          </ul>
        </Styled.ContentBox>
        <Styled.ContentBox>
          <span>Dla kursantów</span>
          <ul>
            <li>Profil</li>
            <li>Login</li>
            <li>Rejestracja</li>
            <li>Panel</li>
          </ul>
        </Styled.ContentBox>
        <Styled.ContentBox>
          <span>Kontakt</span>
          <IconWithText icon={iconLocation} text={contact?.address}/>
          <IconWithText icon={iconEmail} text={contact?.email}/>
          <IconWithText icon={iconPhone} text={contact?.phone}/>
        </Styled.ContentBox>
      </Styled.InnerWrapper>
      <Styled.Copyright>
        <div>
            <p>Regulamin</p>
            <p>Polityka prywatności</p>
        </div>
        <div>
         <p> © {new Date().getFullYear()} DreamsLMS. All rights reserved.</p>
        </div>
      </Styled.Copyright>
    </Styled.Wrapper>
  );
};

export default Footer;
