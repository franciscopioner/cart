// Button.tsx
import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  rounded?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ rounded = false, onClick, children }) => {
  return (
    <StyledButton rounded={rounded} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
