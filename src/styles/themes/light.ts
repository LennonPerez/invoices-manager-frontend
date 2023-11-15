import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  palette: {
    type: "light",
    text: {
      primary: "#0C0E16",
      secondary: "#7E88C3",
      disabled: "#888EB0",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      light: "#9277FF",
      main: "#7C5DFA",
      dark: "#7C5DFA",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#858BB2",
      main: "#7E88C3",
      dark: "#252945",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "##FFFFFF",
      lightPaper: "#F9FAFE",
      darkPaper: "#373B53",
      default: "#F8F8FB",
    },
  },
  navbar: {
    background: "#373B53",
    icon: "#7E88C3",
    border: "#494E6E",
  },
  card: {
    background: "#FFFFFF",
    lightContrastBackground: "#F9FAFE",
    darkContrastBackground: "#373B53",
    shadow: "rgba(72, 84, 159, 0.10)",
  },
  inputs: {
    background: "#FFFFFF",
    border: "#DFE3FA",
    borderActive: "#9277FF",
    shadow: "rgba(72, 84, 159, 0.25)",
    icon: "#7E88C3",
    selector: "#7C5DFA",
    label: "#7E88C3",
    text: "#0C0E16",
  },
  buttons: {
    primary: {
      background: "#7C5DFA",
      hoverBackground: "#9277FF",
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
    },
    secondary: {
      background: "#F9FAFE",
      hoverBackground: "#DFE3FA",
      color: "#7E88C3",
      hoverColor: "#7E88C3",
    },
    tertiary: {
      background: "#373B53",
      hoverBackground: "#0C0E16",
      color: "#888EB0",
      hoverColor: "#888EB0",
    },
    danger: {
      background: "#EC5757",
      hoverBackground: "#FF9797",
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
    },
  },
  status: {
    draft: "#373B53",
    pending: "#FF8F00",
    paid: "#33D69F",
  },
};

export default lightTheme;
