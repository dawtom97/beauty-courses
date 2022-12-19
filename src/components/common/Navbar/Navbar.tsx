import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import * as Styled from './Navbar.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '../Button/Button';
import logo from '../../../assets/logo.svg'
import Image from 'next/image';


export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname, asPath } = useRouter();


  const handleLinkClick = () => {
    setOpen(false);

  }

  return (
    <Styled.Wrapper>
      <Image src={logo.src} width={120} height={30}/>
      <Hamburger
        toggled={isOpen}
        toggle={() => {
          setOpen(prev=>!prev);

        }}
      />
      <Styled.Nav isVisible={isOpen}>
        <ul>
          <li onClick={handleLinkClick}>
            <Link href='/' passHref>
              <Styled.CustomLink isActive={asPath === '/' ? true : false}>HOME</Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href='/projects' passHref>
              <Styled.CustomLink
                isActive={asPath === '/projects' ? true : false}
                href='/projects'
              >
                KURSY
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href='/reference' passHref>
              <Styled.CustomLink
                isActive={asPath === '/reference' ? true : false}
                href='/reference'
              >
                WYSZUKIWARKA
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href={pathname === '/' ? '#contact' : '/'} passHref>
              <Styled.CustomLink  isActive={asPath === '/#contact' ? true : false}>KONTAKT</Styled.CustomLink>
            </Link>
          </li>
          <Button onClick={handleLinkClick}>
           HELLO THERE  
          </Button>
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
