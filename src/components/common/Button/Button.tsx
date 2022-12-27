import styled from 'styled-components';



export const Button = styled.button`
  padding: 1rem 3.5rem;
  border-radius: 64px;
  border: 1px solid ${({ theme }) => theme.primary};
  background: none;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  max-width: 200px;
  justify-content: center;
  transition: 0.4s;

  &:hover {
    background: ${({theme})=>theme.primary};
    color: #fff;
  }

  & > svg {
    margin-right: 4px;

  }
`;
