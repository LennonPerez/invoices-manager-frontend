'use client'

import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "@/providers/themes";

interface BaseButtonProps extends ButtonProps {
    colors: ButtonColor,
}

interface ButtonColor {
    name: string,
    backgroundColor: string,
    textColor: string,
    hoverBackgroundColor?: string,
    hoverTextColor?: string,
}

interface ButtonProps {
    children: ReactNode,
    type?: "button" | "submit",
    onClick?: () => void,
    padding?: string,
}
 
const ButtonStyles = styled.button<BaseButtonProps>`
    background-color: ${(props) => props.colors.backgroundColor};
    color: ${(props) => props.colors.textColor};
    padding: ${(props) => props.padding ?? '0.25rem 1.25rem'};
    display: flex;
    align-items: center;
    min-height: 2.75rem;
    border: none;
    border-radius: 1.5rem;
    font-family: var(--main-font);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9375rem;
    letter-spacing: -0.01563rem;

    &:hover{
        background-color: ${(props) => props.colors.hoverBackgroundColor ?? props.colors.backgroundColor};
        color: ${(props) => props.colors.hoverTextColor ?? props.colors.textColor};
    }
`

const BaseButton: FunctionComponent<BaseButtonProps> = (props) => {
    return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
}

export const PrimaryButton = (props: ButtonProps) =>  {
    const { theme } = useTheme();

    const colors: ButtonColor = {
        name: 'primary',
        backgroundColor: theme.buttons.primary.background,
        hoverBackgroundColor: theme.buttons.primary.hoverBackground,
        textColor: theme.buttons.primary.color,
        hoverTextColor: theme.buttons.primary.hoverColor,
    }

    return <BaseButton {...props} colors={colors}>{props.children}</BaseButton>
}

export const SecondaryButton = (props: ButtonProps) =>  {
    const { theme } = useTheme();

    const colors: ButtonColor = {
        name: 'secondary',
        backgroundColor: theme.buttons.secondary.background,
        hoverBackgroundColor: theme.buttons.secondary.hoverBackground,
        textColor: theme.buttons.secondary.color,
        hoverTextColor: theme.buttons.secondary.hoverColor,
    }

    return <BaseButton {...props} colors={colors}>{props.children}</BaseButton>
}

export const TertiaryButton = (props: ButtonProps) =>  {
    const { theme } = useTheme();

    const colors: ButtonColor = {
        name: 'tertiary',
        backgroundColor: theme.buttons.tertiary.background,
        hoverBackgroundColor: theme.buttons.tertiary.hoverBackground,
        textColor: theme.buttons.tertiary.color,
        hoverTextColor: theme.buttons.tertiary.hoverColor,
    }

    return <BaseButton {...props} colors={colors}>{props.children}</BaseButton>
}

export const FourthButton = (props: ButtonProps) =>  {
    const { theme } = useTheme();

    const colors: ButtonColor = {
        name: 'transparent',
        backgroundColor: 'transparent',
        textColor: theme.palette.common.white,
    }

    return <BaseButton {...props} colors={colors}>{props.children}</BaseButton>
}
 
export default BaseButton;