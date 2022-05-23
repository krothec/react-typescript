import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
  color?: string;
  height: string;
  width: string;
  onClick: () => void;
  border?: string;
  children?: React.ReactNode;
  radius?: string
  margin?: string
  backgroundColor?: string
  showIcon?: boolean;
  PhosphorIcon?: string
}

const Button: React.FC<ButtonProps> = ({
  title,
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  margin,
  backgroundColor,
  showIcon,
  PhosphorIcon,
  ...props}) => {

  return (
      <button {...props}
        onClick={() => onClick()}
        style={{
        backgroundColor,
        border,
        borderRadius: radius,
        height,
        width,
        margin,
        color
      }}
      >
      {title}
      </button>
  )
}

export default Button;
