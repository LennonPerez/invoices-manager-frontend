"use client";

import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const BaseButton: FunctionComponent<BaseButtonProps> = (props) => {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

const ButtonStyles = styled.button<BaseButtonProps>`
  background-color: ${(props) => props.$colors.backgroundColor};
  color: ${(props) => props.$colors.textColor};
  padding: ${(props) => props.$padding ?? "0.25rem 1.25rem"};
  min-height: ${(props) => props.$minHeight ?? "2.75rem"};
  width: ${(props) => props.$width ?? "auto"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1.5rem;
  font-family: var(--main-font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
  letter-spacing: -0.01563rem;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? props.$colors.backgroundColor
        : props.$colors.hoverBackgroundColor ?? props.$colors.backgroundColor};
    color: ${(props) =>
      props.disabled
        ? props.$colors.textColor
        : props.$colors.hoverTextColor ?? props.$colors.textColor};
  }
`;

export interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  $padding?: string;
  $width?: string;
  $minHeight?: string;
}

export interface BaseButtonProps extends ButtonProps {
  $colors: ButtonColor;
}

export interface ButtonColor {
  name: string;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}

export default BaseButton;
