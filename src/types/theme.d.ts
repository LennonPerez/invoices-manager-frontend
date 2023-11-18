// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    palette: {
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      common: {
        black: string;
        white: string;
      };
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      background: {
        paper: string;
        lightPaper: string;
        darkPaper: string;
        default: string;
      };
    };
    navbar: {
      background: string;
      icon: string;
      border: string;
    };
    card: {
      background: string;
      lightContrastBackground: string;
      darkContrastBackground: string;
      shadow: string;
    };
    inputs: {
      background: string;
      border: string;
      borderActive: string;
      error: string;
      icon: string;
      selector: string;
      label: string;
      text: string;
    };
    selector: {
      background: string;
      shadow: string;
      text: string;
      activeText: string;
      border: string;
    };
    buttons: {
      primary: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
      };
      secondary: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
      };
      tertiary: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
      };
      danger: {
        background: string;
        hoverBackground: string;
        color: string;
        hoverColor: string;
      };
    };
    status: {
      draft: string;
      pending: string;
      paid: string;
    };
  }
}
