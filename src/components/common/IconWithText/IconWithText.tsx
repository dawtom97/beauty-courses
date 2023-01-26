import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  transition: 0.4s;

  & img {
    margin-right: 0.8rem;
  }
`

interface Props {
    icon: {
        src:string
    },
    text:string
}

const IconWithText = ({icon,text}:Props) => {
  return (
    <Wrapper><img alt="ikonka" src={icon.src}/> {text}</Wrapper>
  )
}

export default IconWithText