"use client";

import { ButtonHTMLAttributes, FunctionComponent } from "react";
import styled from "styled-components";

const BaseButton: FunctionComponent<BaseButtonProps> = ({
  padding,
  width,
  minHeight,
  buttonColor,
  ...props
}) => {
  const stylesProps: ButtonStylesProps = {
    $padding: padding,
    $width: width,
    $minHeight: minHeight,
    $color: buttonColor,
  };
  return (
    <ButtonStyles {...stylesProps} {...props}>
      {props.children}
    </ButtonStyles>
  );
};

const ButtonStyles = styled.button<ButtonStylesProps>`
  background-color: ${(props) => props.$color.backgroundColor};
  color: ${(props) => props.$color.textColor};
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

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.disabled
          ? props.$color.backgroundColor
          : props.$color.hoverBackgroundColor ?? props.$color.backgroundColor};
      color: ${(props) =>
        props.disabled
          ? props.$color.textColor
          : props.$color.hoverTextColor ?? props.$color.textColor};
    }
  }

  @media (min-width: 768px) {
    padding: ${(props) => props.$padding ?? "0.25rem 1.5rem"};
    min-height: ${(props) => props.$minHeight ?? "3rem"};
  }
`;

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  width?: string;
  minHeight?: string;
  buttonColor: ButtonColor;
}

export interface ButtonStylesProps {
  $padding?: string;
  $width?: string;
  $minHeight?: string;
  $color: ButtonColor;
}

export interface ButtonColor {
  name: string;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}

export default BaseButton;
