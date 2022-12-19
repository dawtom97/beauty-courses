import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

export const DropdownItem = styled.div`
  & > h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: rgba(161, 196, 253, 0.12);
    border-radius: 5px;
    padding: 1.4rem;
    font-weight: 600;
    color: #0b0b0b;
    position: relative;
    font-weight: 600;
    font-size: 1.4rem !important;
    margin-bottom: 1.4rem;

    & svg {
      font-size: 2rem;
    }
  }

  & > p {
    margin-bottom: 2rem;
    font-size: 1.4rem !important;
    padding-left: 1.4rem;
  }
`;

const CourseDropdownItem = ({item}:any) => {
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <DropdownItem >
    <h3 onClick={()=>setShowDropdown(!showDropdown)}>
      {item?.title} <IoIosArrowUp />
    </h3>
    {showDropdown ? <p>{item?.desc}</p> : null}
  </DropdownItem>
  )
}

export default CourseDropdownItem