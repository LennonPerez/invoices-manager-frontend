"use client";

import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "@/providers/themes";

const BaseButton: FunctionComponent<BaseButtonProps> = (props) => {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
};

export const PrimaryButton = (props: ButtonProps) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "primary",
    backgroundColor: theme.buttons.primary.background,
    hoverBackgroundColor: theme.buttons.primary.hoverBackground,
    textColor: theme.buttons.primary.color,
    hoverTextColor: theme.buttons.primary.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "secondary",
    backgroundColor: theme.buttons.secondary.background,
    hoverBackgroundColor: theme.buttons.secondary.hoverBackground,
    textColor: theme.buttons.secondary.color,
    hoverTextColor: theme.buttons.secondary.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export const TertiaryButton = (props: ButtonProps) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "tertiary",
    backgroundColor: theme.buttons.tertiary.background,
    hoverBackgroundColor: theme.buttons.tertiary.hoverBackground,
    textColor: theme.buttons.tertiary.color,
    hoverTextColor: theme.buttons.tertiary.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export const FourthButton = (props: ButtonProps) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "transparent",
    backgroundColor: "transparent",
    textColor: theme.palette.text.primary,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export const DangerButton = (props: ButtonProps) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "danger",
    backgroundColor: theme.buttons.danger.background,
    hoverBackgroundColor: theme.buttons.danger.hoverBackground,
    textColor: theme.buttons.danger.color,
    hoverTextColor: theme.buttons.danger.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
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

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  $padding?: string;
  $width?: string;
  $minHeight?: string;
}

interface BaseButtonProps extends ButtonProps {
  $colors: ButtonColor;
}

interface ButtonColor {
  name: string;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}

export default BaseButton;
