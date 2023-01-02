import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import * as Styled from './Navbar.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '../Button/Button';
import logo from '../../../assets/logo.svg';
import Image from 'next/image';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname, asPath } = useRouter();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Styled.Wrapper>
      <Link href='/' passHref>
        <Image style={{ cursor: 'pointer' }} src={logo.src} width={120} height={30} />
      </Link>

      <Hamburger
        toggled={isOpen}
        toggle={() => {
          setOpen((prev) => !prev);
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
            <Link href='/kursy' passHref>
              <Styled.CustomLink isActive={asPath === '/kursy' ? true : false} href='/kursy'>
                KURSY
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href={pathname === '/' ? '#Search' : '/#Search'} passHref>
              <Styled.CustomLink isActive={asPath === '/#Search' ? true : false} href='/#Search'>
                WYSZUKIWARKA
              </Styled.CustomLink>
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href={pathname === '/' ? '#Contact' : '/#Contact'} passHref>
              <Styled.CustomLink isActive={asPath === '/#Contact' ? true : false}>
                KONTAKT
              </Styled.CustomLink>
            </Link>
          </li>
          {/* <Button onClick={handleLinkClick}>KATEGORIE</Button> */}
        </ul>
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
