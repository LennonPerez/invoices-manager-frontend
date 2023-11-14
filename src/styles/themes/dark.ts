import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  type: "dark",
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#DFE3FA",
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
      paper: "#1E2139",
      lightPaper: "#252945",
      darkPaper: "#0C0E16",
      default: "#141625",
    },
  },
  navbar: {
    background: "#1E2139",
    icon: "#858BB2",
    border: "#494E6E",
  },
  card: {
    background: "#1E2139",
    contrastBackground: "#0C0E16",
    shadow: "rgba(72, 84, 159, 0.10);",
  },
  inputs: {
    background: "#1E2139",
    border: "#252945",
    borderActive: "#252945",
    shadow: "rgba(0, 0, 0, 0.25)",
    icon: "#7E88C3",
    selector: "#7C5DFA",
    label: "#DFE3FA",
    text: "#FFFFFF",
  },
  buttons: {
    primary: {
      background: "#7C5DFA",
      hoverBackground: "#9277FF",
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
    },
    secondary: {
      background: "#252945",
      hoverBackground: "#FFFFFF",
      color: "#DFE3FA",
      hoverColor: "#DFE3FA",
    },
    tertiary: {
      background: "#373B53",
      hoverBackground: "#1E2139",
      color: "#DFE3FA",
      hoverColor: "#DFE3FA",
    },
    danger: {
      background: "#EC5757",
      hoverBackground: "#FF9797",
      color: "#FFFFFF",
      hoverColor: "#FFFFFF",
    },
  },
  status: {
    draft: "#DFE3FA",
    pending: "#FF8F00",
    paid: "#33D69F",
  },
};

export default darkTheme;
