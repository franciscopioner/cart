import styled, { css } from 'styled-components';

interface StyledButtonProps  {
  rounded?: boolean;
}

const roundedStyles = css`
  background-color: #02D72F;
  color: #ffffff;
  
  &:hover {
    background-color: #028a1f;
    color: #ffffff; 
  }
`;

const normalStyles = css`
  background-color: unset;
  color: #000000;

  &:hover {
    background-color: #f0f0f0; 
    color: #000000; 
  }
`;

export const StyledButton = styled.button<StyledButtonProps >`
  border-radius: 16px;
  border: none;
  padding: 6px 16px;
  max-height: 36px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ rounded }) => (rounded ? roundedStyles : normalStyles)}
`;
